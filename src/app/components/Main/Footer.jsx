export default function Footer() {
  return (
    <main id="contact" className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-lg font-bold text-slate-200">QGOCON Conference </p>
        <p className="text-sm">
          For inquiries regarding submissions, registration, or partnerships, contact:{' '}
          <a href="mailto:keshav@gyancity.com" className="text-cyan-400 hover:underline">
            kehav@gyancity.com
          </a>
        </p>
        <div className="pt-4 border-t border-slate-900 text-xs text-slate-500">
          © {new Date().getFullYear()} QGOCON. All rights reserved.
        </div>
      </div>
    </main>
  );
}