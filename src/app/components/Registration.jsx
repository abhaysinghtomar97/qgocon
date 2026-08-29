export default function Registration() {
  const fees = [
    { category: 'Author (Standard / Online)', fee: '$600 USD / Equivalent' },
    { category: 'Author (Student / Scholar)', fee: '$450 USD / Equivalent' },
    { category: 'Listener / Attendee', fee: '$200 USD / Equivalent' },
  ];

  const guidelines = [
    'Each accepted paper registration covers a standard paper length (up to 6-8 pages).',
    'Extra page charges apply for extended manuscripts.',
    'Registration includes presentation certification, conference kit, access to all sessions, and publication processing.',
    'Bank wire transfer and online payment gateway options will be available upon acceptance.',
  ];

  return (
    <section id="registration" className="py-16 bg-slate-200 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Registration Details</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pricing Table */}
          <div className="bg-slate-500 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Fee Structure</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-500 text-slate-800">
                  <th className="pb-3">Category</th>
                  <th className="pb-3 text-right">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {fees.map((f, i) => (
                  <tr key={i}>
                    <td className="py-3.5 font-medium">{f.category}</td>
                    <td className="py-3.5 text-right text-cyan-300 font-semibold">{f.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Guidelines */}
          <div className="bg-slate-500 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Registration Guidelines</h3>
            <ul className="space-y-3">
              {guidelines.map((g, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start">
                  <span className="text-cyan-400 mr-2 font-bold">•</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}