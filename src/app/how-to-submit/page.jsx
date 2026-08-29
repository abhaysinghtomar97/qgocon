export default function HowToSubmit() {
  const steps = [
    {
      number: "01",
      title: "Create a CMT Account",
      description:
        "Before submitting a paper, authors must have an active account on the Microsoft Conference Management Toolkit (CMT).",
    },
    {
      number: "02",
      title: "Sign in to CMT",
      description:
        "Sign in to CMT using your registered account and access the QGOCON conference submission page.",
    },
    {
      number: "03",
      title: "Create a New Submission",
      description:
        "Select the option to create a new submission and choose the appropriate QGOCON conference track for your research.",
    },
    {
      number: "04",
      title: "Enter Paper Information",
      description:
        "Provide the required paper title, abstract, authors, affiliations, subject areas, and other information requested by the submission form.",
    },
    {
      number: "05",
      title: "Upload Your Manuscript",
      description:
        "Upload your manuscript according to the file format and submission requirements specified by QGOCON.",
    },
    {
      number: "06",
      title: "Review Your Submission",
      description:
        "Carefully verify the paper information, author details, uploaded manuscript, and selected track before submitting.",
    },
    {
      number: "07",
      title: "Submit the Paper",
      description:
        "After reviewing all information, complete the submission through the official QGOCON CMT conference page.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Paper Submission
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How to Submit
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Follow these steps to submit your research paper to QGOCON through
            the Microsoft Conference Management Toolkit (CMT).
          </p>
        </div>

        {/* CMT Requirement */}
        <div className="mb-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 font-bold text-white">
              ✓
            </div>

            <div>
              <h2 className="font-bold text-cyan-950">
                A CMT account is required
              </h2>

              <p className="mt-2 text-sm leading-6 text-cyan-900/80">
                Authors must create and sign in to a Microsoft CMT account
                before attempting to submit a paper.
              </p>

              <a
                href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 hover:underline"
              >
                Create a CMT Account
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Steps */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Submission Process
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Complete the following steps in order.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md sm:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Author Help */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">

            {/* CMT Guide */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
                Need Help?
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-950">
                CMT Author Guide
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Refer to Microsoft's official documentation for detailed
                instructions on completing the CMT author submission form.
              </p>

              <a
                href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 hover:underline"
              >
                View Author Submission Guide
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Before Submit */}
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Before you submit
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="text-cyan-500">✓</span>
                  Check that all author details are correct.
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-500">✓</span>
                  Select the correct conference track.
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-500">✓</span>
                  Verify that your manuscript follows the submission guidelines.
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-500">✓</span>
                  Review the uploaded file before final submission.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Submission CTA */}
        <section className="mt-10 overflow-hidden rounded-2xl bg-slate-950 p-8 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Official Submission
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Ready to submit your paper?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            All QGOCON paper submissions will be handled through the official
            Microsoft CMT conference submission system.
          </p>

          {/* Replace # with the actual CMT conference URL */}
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            CMT Submission Link Coming Soon
            <span aria-hidden="true">→</span>
          </a>

          <p className="mt-4 text-xs text-slate-500">
            The official submission link will be published once the QGOCON
            CMT conference site is available.
          </p>
        </section>

      </div>
    </main>
  );
}