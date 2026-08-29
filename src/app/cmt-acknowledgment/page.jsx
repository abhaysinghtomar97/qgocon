export default function CMTAcknowledgment() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-200 bg-slate-950 px-6 py-7 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              QGOCON
            </p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              CMT Acknowledgment
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Conference submission management
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                Microsoft CMT
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {/* IMPORTANT:
                    Replace this placeholder with the exact
                    acknowledgment text provided by CMT.
                */}
                [INSERT THE EXACT CMT ACKNOWLEDGMENT TEXT HERE]
              </p>
            </div>

            {/* Conference Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Conference
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  QGOCON
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Year
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  2026
                </p>
              </div>
            </div>

            {/* Back to Website */}
            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                ← Back to QGOCON
              </a>
            </div>
          </div>

       
        </div>
      </div>
    </main>
  );
}