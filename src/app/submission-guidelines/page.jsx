export default function SubmissionGuidelines() {
  const guidelines = [
    {
      number: "01",
      title: "Manuscript Preparation",
      description:
        "Authors should prepare their manuscripts as original research contributions relevant to one or more of the QGOCON conference tracks.",
    },
    {
      number: "02",
      title: "Paper Format",
      description:
        "Manuscripts must follow the official formatting and template requirements specified by the conference. Authors should ensure consistent formatting, citations, figures, tables, and references throughout the paper.",
    },
    {
      number: "03",
      title: "Abstract",
      description:
        "The submission should include a clear and concise abstract describing the research problem, methodology, key findings, and significance of the work.",
    },
    {
      number: "04",
      title: "Paper Length",
      description:
        "Manuscripts should comply with the paper length requirements specified by the conference. Additional page charges, if applicable, will be communicated separately.",
    },
    {
      number: "05",
      title: "Figures, Tables & References",
      description:
        "All figures and tables should be clearly numbered, appropriately referenced within the manuscript, and provided with descriptive captions. References should follow the required citation format.",
    },
    {
      number: "06",
      title: "File Format",
      description:
        "Authors must upload their manuscript in the file format accepted by the CMT submission system. The final file should be checked carefully before submission.",
    },
    {
      number: "07",
      title: "Originality",
      description:
        "Submitted manuscripts must contain original work and must not have been previously published or simultaneously submitted to another conference, journal, or publication venue.",
    },
    {
      number: "08",
      title: "Submission Through CMT",
      description:
        "All manuscripts must be submitted through the official Microsoft Conference Management Toolkit (CMT) submission system. Submissions through email or any other platform will not be considered.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
            For Authors
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Submission Guidelines
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Please review the following requirements carefully before preparing
            and submitting your manuscript to QGOCON.
          </p>
        </div>

        {/* Guidelines */}
        <div className="space-y-4">
          {guidelines.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md sm:p-7"
            >
              <div className="flex items-start gap-5">

                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xs font-bold text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                  {item.number}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50">
          <div className="flex items-start gap-4 p-6 sm:p-7">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-bold text-white">
              !
            </div>

            <div>
              <h2 className="font-bold text-cyan-950">
                Important Submission Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-cyan-900/80">
                Authors should carefully review their manuscript before
                submitting it. Once submitted, changes to the submission may
                be restricted depending on the conference submission policy.
              </p>
            </div>
          </div>
        </div>

        {/* Submission CTA */}
        <div className="mt-10 rounded-2xl bg-slate-950 p-7 text-center sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Ready to Submit?
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Submit your paper through CMT
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Paper submissions for QGOCON will be managed through the official
            Microsoft Conference Management Toolkit.
          </p>

          {/* Replace href once CMT conference URL is available */}
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            CMT Submission Link Coming Soon
          </a>
        </div>

        {/* CMT Acknowledgment */}
        <div className="mt-10 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs leading-5 text-slate-400">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>

      </div>
    </main>
  );
}