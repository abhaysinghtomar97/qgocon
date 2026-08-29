export default function TracksCFP() {
  const tracks = [
    {
      title: 'Track 1: Quantum Computing & Information',
      topics: [
        'Quantum Algorithms & Complexity',
        'Quantum Cryptography & QKD',
        'Quantum Machine Learning (QML)',
        'Fault-Tolerant Quantum Systems & Error Correction',
      ],
    },
    {
      title: 'Track 2: Generative AI & Foundation Models',
      topics: [
        'Large Language Models (LLMs) & Multimodal AI',
        'Diffusion Models & Generative Vision',
        'AI Safety, Alignment & Digital Trust',
        'Generative Modeling in Science & Engineering',
      ],
    },
    {
      title: 'Track 3: Optical Communication & Photonics',
      topics: [
        'Free-Space Optics (FSO) & LiFi',
        'Fiber-Optic Sensor Networks & Coherent Transmission',
        'Photonic Integrated Circuits (PICs)',
        'Quantum Optical Networks',
      ],
    },
    {
      title: 'Track 4: Chemical Technology & Material Science',
      topics: [
        'Computational Chemistry & Molecular Simulation',
        'Green Chemical Processes & Nanotechnology',
        'AI/ML for Drug Discovery & Material Design',
        'Polymers, Catalysis & Environmental Chemistry',
      ],
    },
  ];

  return (
    <section id="tracks" className="py-16 bg-slate-800/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Call for Papers & Tracks</h2>
          <p className="text-slate-400">
            We invite original, unpublished research contributions across the following core conference tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">{track.title}</h3>
              <ul className="space-y-2">
                {track.topics.map((topic, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <span className="text-cyan-400 mr-2">▹</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}