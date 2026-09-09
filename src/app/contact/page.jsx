const contactItems = [
  {
    title: "General Inquiries",
    description:
      "For general questions regarding QGOCON, conference activities, and participation.",
    value: "keshav@gyancity.com",
    href: "mailto:keshav@gyancity.com",
  },
  {
    title: "Paper Submission",
    description:
      "For questions related to paper submission, CMT access, and submission procedures.",
    value: "keshav@gyancity.com",
    href: "mailto:keshav@gyancity.com",
  },
  {
    title: "Registration",
    description:
      "For inquiries regarding registration, fees, payment, and participation.",
    value: "keshav@gyancity.com",
    href: "mailto:keshav@gyancity.com",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Get in Touch
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Contact QGOCON
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Have a question about the conference, paper submission,
            registration, or participation? Reach out to the conference team.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">

          {/* Left Card */}
          <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-sm sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              QGOCON 2027
            </span>

            <h2 className="mt-4 text-2xl font-bold">
              We're here to help.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              For conference-related questions, please contact the organizing
              team using the official email address provided below.
            </p>

            {/* Email */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Conference Email
              </p>

              <a
                href="mailto:keshav@gyancity.com"
                className="mt-2 block break-all text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
              >
                keshav@gyancity.com
              </a>
            </div>

            {/* Response */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                For Authors
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Please review the{" "}
                <a
                  href="/author-guidelines"
                  className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  Author Guidelines
                </a>{" "}
                and{" "}
                <a
                  href="/submission-guidelines"
                  className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  Submission Guidelines
                </a>{" "}
                before contacting the organizers.
              </p>
            </div>
          </section>

          {/* Right Contact Options */}
          <section>
            <div className="grid gap-4">
              {contactItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md sm:p-7"
                >
                  <div className="flex items-start gap-5">

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l9 6 9-6"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h2 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>

                      <a
                        href={item.href}
                        className="mt-3 inline-flex break-all text-sm font-semibold text-cyan-600 transition hover:text-cyan-800 hover:underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Author Resources */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
              Author Resources
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Looking for submission information?
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find everything you need to prepare and submit your paper.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <a
              href="/author-guidelines"
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              <h3 className="font-semibold text-slate-900">
                Author Guidelines
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                General information and expectations for authors.
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-600">
                Read Guidelines →
              </span>
            </a>

            <a
              href="/submission-guidelines"
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              <h3 className="font-semibold text-slate-900">
                Submission Guidelines
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Requirements for preparing your research manuscript.
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-600">
                View Requirements →
              </span>
            </a>

            <a
              href="/how-to-submit"
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              <h3 className="font-semibold text-slate-900">
                How to Submit
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Follow the step-by-step CMT submission process.
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-600">
                Submission Guide →
              </span>
            </a>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 overflow-hidden rounded-2xl bg-cyan-500 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Ready to submit your research?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-900/70">
            Review the submission requirements and follow the official CMT
            submission process.
          </p>

          <a
            href="/where-to-submit"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Where to Submit
            <span aria-hidden="true">→</span>
          </a>

        </section>
       {/* add style for border as dashed  */}
        <div className="mt-10 rounded-2xl border text-center border-dashed border-black bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Need Technical Assistance?
          </h2>
      
         
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-900/70">
            If you encounter any technical issues or bugs while using the
            conference website or submission platform, please report them to
            our technical support team.
          </p>
          <a
            href="mailto:abhaysinghtomar97@gmail.com" >
            <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
              Report a Bug or Technical Issue 
              <span aria-hidden="true">→</span>
            </span>
            <p className="mt-4 text-sm text-slate-600">
              Developer - Abhay Singh Tomar
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}

 