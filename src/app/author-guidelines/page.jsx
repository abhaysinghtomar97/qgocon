export default function AuthorGuidelines() {
  const guidelines = [
    {
      title: "Originality",
      text: "Submitted manuscripts must contain original research that has not been previously published or simultaneously submitted elsewhere.",
    },
    {
      title: "Author Responsibility",
      text: "Authors are responsible for ensuring that all listed authors have approved the submission and agree with its contents.",
    },
    {
      title: "Language",
      text: "All submissions must be written in clear and professional English.",
    },
    {
      title: "Plagiarism",
      text: "All submissions may be checked for plagiarism and other forms of academic misconduct. Manuscripts must comply with accepted standards of research integrity.",
    },
    {
      title: "Presentation",
      text: "Authors of accepted papers are expected to present their work according to the conference presentation schedule.",
    },
    {
      title: "Registration",
      text: "At least one author of an accepted paper must complete registration according to the conference registration requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
            For Authors
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Author Guidelines
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            Please review the following guidelines before preparing and
            submitting your manuscript to QGOCON.
          </p>
        </div>

        <div className="space-y-4">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}