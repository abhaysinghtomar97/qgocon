export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center  text-white text-center px-4 pt-20">
      <div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      url('https://media.licdn.com/dms/image/v2/C561BAQFgbDepLJoJQQ/company-background_10000/company-background_10000/0/1586469861491/ics___international_conference_services_ltd__cover?e=2147483647&v=beta&t=tUhFfcskrA27tkle-20FZ0PP1M5mqiv_T5Wof391eRU')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
      <div className="max-w-4xl mx-auto z-10 ">
        
        <h1 className=" text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          International Conference on Emerging Trends in{' '}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Quantum Computing, Generative AI, Optical Communication & Chemical Technology
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-cyan-200 font-semibold mb-2">
          Conference Acronym: <span className="text-white font-bold">QGOCON</span>
        </p>
        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Connecting researchers, academicians, and industry experts across interdisciplinary breakthroughs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#registration"
            className="px-6 py-3 rounded-lg font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20"
          >
            Register Now
          </a>
          <a
            href="#tracks"
            className="px-6 py-3 rounded-lg font-medium text-white border border-slate-700 bg-slate-800/80 hover:bg-slate-800 transition"
          >
            Call for Papers
          </a>
        </div>
      </div>
    </section>
  );
}