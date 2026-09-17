export default function CallForPapers() {
  return (
    <div className="bg-slate-50 py-16 px-4 font-sans text-center">
      <div className="mx-auto max-w-3xl space-y-10">
        
        {/* Invitation Text */}
        <p className="text-xl font-light text-slate-600 sm:text-2xl sm:leading-relaxed">
          We are pleased to invite prospective authors to submit their original
          manuscripts to <span className="font-medium text-slate-800">QGOCON&reg;-2027</span>.
        </p>

        {/* Scopus Section */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-600">
            Accepted papers will be submitted to Scopus/ESCI Index Journal
          </p>
          <p className="text-base text-slate-600">
            <strong className="font-bold text-slate-800">Scopus:</strong> Journal of Mechanics of Continua and Mathematical Sciences
          </p>
          <a 
            href="https://www.scopus.com/sources" 
            className="inline-block text-blue-500 transition-colors duration-200 hover:text-blue-700 hover:underline"
          >
            Scopus Link
          </a>
        </div>

        {/* DOAJ Section */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-600">
            Accepted papers will be submitted to DOAJ Index Journal
          </p>
          <p className="text-base text-slate-600">
            <strong className="font-bold text-slate-800">DOAJ:</strong> Journal of Independent Studies and Research Computing
          </p>
          <a 
            href="https://doaj.org/" 
            className="inline-block text-blue-500 transition-colors duration-200 hover:text-blue-700 hover:underline"
          >
            DOAJ Link
          </a>
        </div>

      </div>
    </div>
  );
}