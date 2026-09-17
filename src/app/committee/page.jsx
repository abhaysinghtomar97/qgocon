const committeeSections = [
  {
    title: "Conference Leadership",
    members: [
      {
        role: "General Chair",
        name: "Dr. Bishwajeet Pandey",
        about: "Director of Applied AI",
        affiliation: "Dr. A. P. J. Abdul Kalam Technical University, India",
        imageUrl: "/biswajeet.png", // Added sample high-res image
      },
      {
        role: "Co-Chair",
        name: "Arthur James Swart",
        about: "Leadership & Operations",
        affiliation: "Central University of Technology",
        imageUrl: "/arthur.jpg", // Local image for faster loading
      },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      {
        role: "Technical Committee Member",
        name: "Keshav Kumar",
        about: "Technical Reviewer",
        affiliation: "Dr. A. P. J. Abdul Kalam Technical University, India",
        imageUrl: "/keshav_kumar.jpg", 
      },
      {
        role: "Technical Committee Member",
        name: "Linga Reddy Alva",
        about: "Research Analyst",
        affiliation: "Independent Researcher",
        imageUrl: "/linga-reddy-alva.jpg",
      },
      {
        role: "Technical Committee Member",
        name: "Bireswar Banerjee",
        about: "Industry Specialist",
        affiliation: "VISA Inc",
        imageUrl: "",
      },
      {
        role: "Technical Committee Member",
        name: "Pushpanjali Pandey",
        about: "Director",
        affiliation: "Gyancity Research Consultancy",
        imageUrl: "/pushpanjali.jpg", 
      },
      {
        role: "Technical Committee Member",
        name: "Rajnikant",
        about: "Academic Coordinator",
        affiliation: "",
        imageUrl: "",
      },
      {
        role: "Technical Committee Member",
        name: "Krishnaveni",
        about: "Program Assessor",
        affiliation: "",
        imageUrl: "",
      },
      {
        role: "Technical Committee Member",
        name: "Prashant Vajpayee",
        about: "Evaluation Committee",
        affiliation: "",
        imageUrl: "",
      },
    ],
  },
];

export default function Committee() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 font-sans text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header & Hero Image Section */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            QGOCON 2027
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Conference Committee
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Meet the academic and professional committee members supporting the
            organization, technical program, and peer-review process of QGOCON.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
              alt="Committee collaborating at conference"
              className="h-72 w-full object-cover object-center"
            />
          </div>
          <p className="mt-6 text-sm font-medium italic text-slate-600">
            "Bringing together global leaders in technology and academia to shape the future of applied AI research."
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-24">
          {committeeSections.map((section) => (
            <section key={section.title}>
              <div className="mb-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <h2 className="text-center text-2xl font-bold text-slate-950 sm:text-3xl">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.members.map((member, index) => (
                  <article
                    key={`${member.name}-${index}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
                  >
                    {/* Large Full-Width Profile Photo */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-950 text-5xl font-bold text-cyan-400 transition-colors duration-500 group-hover:bg-cyan-900 group-hover:text-white">
                          {member.name
                            .replace("Dr. ", "")
                            .split(" ")
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                      )}
                      
                      {/* Floating Badge */}
                      <div className="absolute right-4 top-4">
                        <span className="rounded-full bg-slate-900/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                          Committee
                        </span>
                      </div>
                    </div>

                    {/* Information (Bottom Half) */}
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">
                        {member.role}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {member.name}
                      </h3>

                      {member.about && (
                        <p className="mt-2 text-sm font-medium text-slate-700">
                          {member.about}
                        </p>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {member.affiliation}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
     

        {/* TPC Mandate Section */}
        <section className="mt-32 max-w-4xl bg-white p-10 md:p-14 rounded-3xl border border-slate-100 shadow-sm">
          <div className="mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              TPC Mandate
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              How the committee <span className="text-blue-600">shapes</span> QGOCON
            </h2>
            <p className="mt-4 max-w-2xl text-slate-500 leading-relaxed text-sm">
              The TPC ensures technical quality from submission through program
              curation, balancing research novelty with practical deployment
              relevance.
            </p>
          </div>

          <div className="space-y-0">
            {/* Step 01 */}
            <div className="flex gap-6 md:gap-10 py-8 border-t border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 w-12 md:w-20 shrink-0">
                01
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">
                  Tracks
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  Shaping tracks
                </h3>
                <p className="text-slate-500 text-sm md:text-base">
                  Align focus areas with timely secure AI research and industry
                  needs.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex gap-6 md:gap-10 py-8 border-t border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 w-12 md:w-20 shrink-0">
                02
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">
                  Review
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  Reviewing submissions
                </h3>
                <p className="text-slate-500 text-sm md:text-base">
                  Guide fair, rigorous evaluations and constructive author
                  feedback.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex gap-6 md:gap-10 py-8 border-t border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 w-12 md:w-20 shrink-0">
                03
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">
                  Program
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  Curating program
                </h3>
                <p className="text-slate-500 text-sm md:text-base">
                  Select sessions that connect advances to operational security
                  practice.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}