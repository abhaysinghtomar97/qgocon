export default function AboutAndDates() {
  const dates = [
    {
      label: "Paper Submission Deadline",
      date: "To Be Announced",
    },
    {
      label: "Review Notification",
      date: "Within 2–3 Weeks of Submission",
    },
    {
      label: "Registration Deadline",
      date: "To Be Announced",
    },
    {
      label: "Conference Dates",
      date: "To Be Announced",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-slate-50 py-20 text-slate-900"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* About QGOCON */}
          <div>
            {/* Section Label */}
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              About the Conference
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              About QGOCON
            </h2>

            {/* Accent */}
            <div className="mt-5 h-1 w-16 rounded-full bg-cyan-500" />

            {/* Content */}
            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                The{" "}
                <strong className="font-semibold text-slate-900">
                  International Conference on Emerging Trends in Quantum
                  Computing, Generative AI, Optical Communication, and Chemical
                  Technology (QGOCON)
                </strong>{" "}
                provides a premier interdisciplinary forum for researchers,
                practitioners, and educators.
              </p>

              <p>
                The conference aims to foster discussions on how{" "}
                <span className="font-medium text-slate-800">
                  quantum algorithms, foundation generative models, high-speed
                  optical photonics, and novel chemical technologies
                </span>{" "}
                converge to address emerging scientific and industrial
                challenges.
              </p>
            </div>

            {/* Conference Focus */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Interdisciplinary Research",
                "Emerging Technologies",
                "Academic Collaboration",
                "Industry Innovation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-xs font-bold text-cyan-600">
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div
            id="dates"
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {/* Header */}
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-6 sm:px-7">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  📅
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Important Dates
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Key conference milestones
                  </p>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="divide-y divide-slate-100">
              {dates.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-200 hover:bg-slate-50 sm:px-7"
                >
                  {/* Number + Label */}
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 transition-colors group-hover:bg-cyan-50 group-hover:text-cyan-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="shrink-0 text-right text-xs font-semibold text-cyan-600 sm:text-sm">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 sm:px-7">
              <p className="text-xs leading-5 text-slate-500">
                Dates marked as{" "}
                <span className="font-semibold text-slate-700">
                  “To Be Announced”
                </span>{" "}
                will be updated once officially confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}