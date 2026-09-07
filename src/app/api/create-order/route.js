import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { category, paperId, paperTitle } = await req.json();

    if (!paperId || !paperTitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Set the exact USD amount (e.g., $600 USD)
    const amountInDollars = 600; 
    
    // Convert to cents for Razorpay (600 * 100 = 60000)
    const amountInCents = amountInDollars * 100; 
    const currency = 'USD';

    // 2. Create order on Razorpay
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInCents,
      currency: currency,
      receipt: `receipt_${paperId.slice(0, 10)}_${Date.now()}`,
    });

    // 3. Connect to MongoDB Atlas
    const client = await clientPromise;
    const db = client.db('payment_system');

    // 4. Save draft record in MongoDB
    await db.collection('orders').insertOne({
      paperId,
      paperTitle,
      category: category || 'Author $600.00 USD',
      amountDisplay: `$${amountInDollars} USD`, // Easier to read in your DB
      amountRaw: amountInCents,                 // Keep the raw value for auditing
      currency,
      razorpayOrderId: razorpayOrder.id,
      status: 'PENDING',
      createdAt: new Date(),
    });

    // Send the order details back to the frontend to open the modal
    return NextResponse.json(razorpayOrder);
    
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}