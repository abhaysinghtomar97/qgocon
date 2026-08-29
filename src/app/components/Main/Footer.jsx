export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="text-xl font-bold tracking-tight text-white">
          QGOCON Conference
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          For inquiries regarding submissions, registration, or partnerships,
          contact{" "}
          <a
            href="mailto:keshav@gyancity.com"
            className="font-medium text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
          >
            keshav@gyancity.com
          </a>
        </p>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} QGOCON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}