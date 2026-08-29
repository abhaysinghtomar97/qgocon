const committeeSections = [
  {
    title: "Conference Leadership",
    members: [
      {
        role: "General Chair",
        name: "Dr. Name of General Chair",
        affiliation: "Institution / Organization",
      },
      {
        role: "Technical Program Chair",
        name: "Dr. Name of Technical Chair",
        affiliation: "Institution / Organization",
      },
      {
        role: "Conference Co-Chair",
        name: "Dr. Name of Co-Chair",
        affiliation: "Institution / Organization",
      },
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      {
        role: "Organizing Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
      {
        role: "Organizing Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
      {
        role: "Organizing Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      {
        role: "Technical Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
      {
        role: "Technical Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
      {
        role: "Technical Committee Member",
        name: "Dr. Name",
        affiliation: "Institution / Organization",
      },
    ],
  },
];

export default function Committee() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            QGOCON 2026
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Conference Committee
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Meet the academic and professional committee members supporting
            the organization, technical program, and peer-review process of
            QGOCON.
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-14">
          {committeeSections.map((section) => (
            <section key={section.title}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <h2 className="text-center text-lg font-bold text-slate-950 sm:text-xl">
                  {section.title}
                </h2>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {section.members.map((member, index) => (
                  <article
                    key={`${member.name}-${index}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
                  >
                    {/* Avatar */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                        {member.name
                          .replace("Dr. ", "")
                          .split(" ")
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join("")
                          .toUpperCase()}
                      </div>

                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-700">
                        Committee
                      </span>
                    </div>

                    {/* Information */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-600">
                        {member.role}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-slate-900">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {member.affiliation}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Committee Responsibility */}
        <section className="mt-16 overflow-hidden rounded-2xl bg-slate-950 p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Academic Excellence
              </span>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Supporting a rigorous technical program
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                The QGOCON committee is responsible for coordinating the
                conference program, supporting the peer-review process, and
                maintaining the academic quality and integrity of the
                conference.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-400">
              ✦
            </div>
          </div>
        </section>

        
       
      </div>
    </main>
  );
}