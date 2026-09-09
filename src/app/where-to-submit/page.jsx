export default function WhereToSubmit() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Paper Submission
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Where to Submit
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            All QGOCON research papers will be submitted through the official
            Microsoft Conference Management Toolkit (CMT).
          </p>
        </div>

        {/* Main Submission Card */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Top */}
          <div className="bg-slate-950 px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
                  CMT
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    Official Submission Platform
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-white">
                    Microsoft CMT
                  </h2>
                </div>
              </div>

              <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                Official
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">

            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-cyan-950">
                    Submit your paper through CMT
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-cyan-900/80">
                    The QGOCON peer-review and paper submission process will
                    be managed through Microsoft Conference Management Toolkit.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Status */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Submission Status
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                CMT submission link Ready
              </h3>


              
              <a
                href="https://cmt3.research.microsoft.com/QGOCON2027/Submission/Index"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl hover:shadow-green-300  bg-green-600 px-6 py-3 text-sm font-bold text-white"
                aria-disabled="true"
              >
                Submit Paper Now !
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Before Submission */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h3 className="text-lg font-bold text-slate-950">
                Before submitting
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-cyan-600 shadow-sm">
                      01
                    </span>

                    <h4 className="font-semibold text-slate-900">
                      Create a CMT account
                    </h4>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Authors must have a Microsoft CMT account before
                    submitting a paper.
                  </p>

                  <a
                    href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-cyan-600 hover:text-cyan-800 hover:underline"
                  >
                    Create account ↗
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-cyan-600 shadow-sm">
                      02
                    </span>

                    <h4 className="font-semibold text-slate-900">
                      Review submission requirements
                    </h4>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Make sure your manuscript follows the QGOCON submission
                    and author guidelines.
                  </p>

                  <a
                    href="/submission-guidelines"
                    className="mt-3 inline-flex text-sm font-semibold text-cyan-600 hover:text-cyan-800 hover:underline"
                  >
                    View guidelines →
                  </a>
                </div>

              </div>
            </div>

            {/* No Alternative Submission */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-950">
                Important
              </h3>

              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                Please submit your manuscript only through the official QGOCON
                CMT submission system. Manuscripts sent by email or submitted
                through other platforms will not be considered.
              </p>
            </div>

          </div>
        </section>

       
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