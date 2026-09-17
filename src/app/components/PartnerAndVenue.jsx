const sponsors = {
  platinum: [
    { name: "UTB", logo: "/partners.png" },
    { name: "Sponsor 2", logo: "/gyancity.jpg" },
    { name: "Sponsor 3", logo: "/rtcse.png" },
    { name: "YARSI", logo: "/yarsi.jpg" },
    { name: "RTCSE", logo: "/rtcse.png" },
    { name: "Scopus", logo: "/pub3.svg" },
  ],
  partners: [
    { name: "Partner 1", logo: "/pub.jpg" },
    { name: "Partner 2", logo: "/pub2.jpg" },
    { name: "INCES", logo: "/pub3.jpg" },
    { name: "Scopus", logo: "/pub3.svg" },
    { name: "EBSCO", logo: "/pub4.jpg" },
    { name: "Google Scholar", logo: "/pub5.jpg" },
  ],
};

export default function PartnersAndVenue() {
  return (
    <main className="bg-slate-50 py-24 font-sans text-slate-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION 1: PLATINUM SPONSORS
        ========================================= */}
        <section className="mb-24 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 sm:text-3xl">
            Our Platinum Sponsors
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-500" />

          {/* Logo Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain opacity-80  transition-all duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          
        </section>

        {/* =========================================
            SECTION 2: PUBLISHER & PARTNERS
        ========================================= */}
        <section className="mb-24 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 sm:text-3xl">
            Publisher, Indexing Partner & Technical Co-Sponsor
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-500" />

          {/* Logo Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {sponsors.partners.map((partner, index) => (
              <div
                key={index}
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            SECTION 3: VENUE
        ========================================= */}
        <section className="text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 sm:text-3xl">
            Venue
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-500" />

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          
            
            <div className="p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-slate-600">
                Venue of <strong className="font-semibold text-slate-900">QGOCON 2027</strong> is{" "}
                <span className="font-semibold text-cyan-700">
                 Kathmandu , Nepal
                </span>
             
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}