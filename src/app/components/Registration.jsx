export default function Registration() {
  const fees = [
    {
      category: "Author",
      type: "Standard / Online",
      fee: "$600",
      currency: "USD / Equivalent",
    },
  ];

  const guidelines = [
    "Each accepted paper registration covers a standard paper length.",
    "Extra page charges apply for extended manuscripts.",
    "Registration includes presentation certification, conference kit, access to all sessions, and publication processing.",
    "Bank wire transfer and online payment gateway options will be available upon acceptance.",
  ];

  return (
    <section
      id="registration"
      className="w-full bg-slate-50 py-20 text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Registration
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Registration Details
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Complete your registration after acceptance and join QGOCON for
            an engaging academic conference experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Fee Structure */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                💳
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Fee Structure
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Registration fee for accepted authors
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Category
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Fee
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {fees.map((f, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-slate-50"
                    >
                      <td className="px-5 py-5">
                        <p className="font-semibold text-slate-900">
                          {f.category}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {f.type}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-right">
                        <p className="text-xl font-bold text-cyan-600">
                          {f.fee}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {f.currency}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fee Note */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-cyan-50 p-4">
              <span className="mt-0.5 text-cyan-600">ℹ</span>

              <p className="text-xs leading-5 text-cyan-900">
                The final registration amount and payment instructions will be
                communicated to authors after paper acceptance.
              </p>
            </div>
          </div>

          {/* Registration Guidelines */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                📋
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Registration Guidelines
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Important information before registration
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {guidelines.map((guideline, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-600">
                    {i + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-600">
                    {guideline}
                  </p>
                </li>
              ))}
            </ul>

            {/* Bottom Notice */}
            <div className="mt-7 border-t border-slate-100 pt-6">
              <div className="rounded-xl bg-slate-900 px-5 py-4">
                <p className="text-sm font-medium text-white">
                  Accepted authors will receive detailed payment instructions.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Please keep your acceptance notification available when
                  completing registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}