export default function AboutAndDates() {
  const dates = [
    { label: 'Paper Submission Deadline', date: 'To Be Announced' },
    { label: 'Review Notification', date: 'Within 2-3 Weeks of Submission' },
    { label: 'Registration Deadline', date: 'To Be Announced' },
    { label: 'Conference Dates', date: 'To Be Announced' },
  ];

  return (
    <section id="about"  className="py-16 bg-gray-600 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-cyan-400 pl-4">
              About QGOCON
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The <strong>International Conference on Emerging Trends in Quantum Computing, Generative AI, Optical Communication, and Chemical Technology (QGOCON)</strong> provides a premier interdisciplinary forum for researchers, practitioners, and educators.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The conference aims to foster discussions on how quantum algorithms, foundation generative models, high-speed optical photonics, and novel chemical technologies converge to address emerging scientific and industrial challenges.
            </p>
          </div>

          {/* Important Dates Table */}
          <div id="dates" className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 shadow-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Important Dates</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <tbody className="divide-y divide-slate-700">
                  {dates.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-800/50">
                      <td className="py-3.5 font-medium text-slate-200">{item.label}</td>
                      <td className="py-3.5 text-right text-cyan-300 font-semibold">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}