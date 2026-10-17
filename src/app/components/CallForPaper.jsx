
export default function CallForPapers() {
  const scopusJournals = [
    {
      name: "Journal of Optical Communications",
      url: "https://www.scopus.com/sourceid/19573",
    },
    {
      name: "Journal of Mechanics of Continua and Mathematical Sciences",
      url: "https://www.scopus.com/sourceid/21101184510",
    },
    {
      name: "Acta Innovations",
      url: "https://www.scopus.com/sourceid/21101045282#tabs=2",
    },
    {
      name: "Indian Journal of Chemical Technology",
      url: "https://www.scopus.com/sourceid/24098",
    },
    {
      name: "Journal of Animal Environment",
      url: "https://www.scopus.com/sourceid/21101445137",
    },
    {
      name: "Adolescencia e Saude",
      url: "https://www.scopus.com/sourceid/19900192604#tabs=2",
    },
  ];

  return (
    <div className="bg-slate-50 px-4 py-16 font-sans text-center sm:px-6">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Invitation Text */}
        <p className="text-xl font-light leading-relaxed text-slate-600 sm:text-2xl">
          We are pleased to invite prospective authors to submit their
          original manuscripts to{" "}
          <span className="font-medium text-slate-800">
            QGOCON&reg;-2027
          </span>.
        </p>

        {/* Scopus Section */}
        <div className="space-y-5">
          <p className="text-lg font-semibold text-slate-700 sm:text-xl">
            Accepted papers will be submitted to Scopus/ESCI Index Journal
          </p>

          <div className="mx-auto max-w-3xl space-y-3">
            {scopusJournals.map((journal) => (
              <div
                key={journal.url}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md sm:px-6"
              >
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium leading-relaxed text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                >
                  {journal.name}
                  <span className="ml-2 inline-block text-sm">
                    ↗
                  </span>
                </a>
              </div>
            ))}
          </div>

          <a
            href="https://www.scopus.com/sources"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            Explore Scopus Sources →
          </a>
        </div>

        {/* DOAJ Section */}
        <div className="space-y-3 border-t border-slate-200 pt-8">
          <p className="text-lg font-semibold text-slate-700 sm:text-xl">
            Accepted papers will be submitted to DOAJ Index Journal
          </p>

          <p className="text-base leading-relaxed text-slate-600">
            <strong className="font-bold text-slate-800">
              DOAJ:
            </strong>{" "}
            Journal of Independent Studies and Research Computing
          </p>

          <a
            href="https://doaj.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            DOAJ Link ↗
          </a>
        </div>

      </div>
    </div>
  );
}
