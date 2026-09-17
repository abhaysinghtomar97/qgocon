import Link from "next/link";
export default function TracksCFP() {
 const tracks = [
  {
    number: "01",
    title: "Quantum Computing & Information",
    description:
      "Advancing quantum computation, information processing, and secure quantum technologies.",
    topics: [
      "Quantum Algorithms & Complexity",
      "Quantum Cryptography & QKD",
      "Quantum Machine Learning (QML)",
      "Fault-Tolerant Quantum Systems & Error Correction",
    ],
  },
  {
    number: "02",
    title: "Generative AI & Foundation Models",
    description:
      "Exploring next-generation generative models, intelligent systems, and trustworthy AI.",
    topics: [
      "Large Language Models (LLMs) & Multimodal AI",
      "Diffusion Models & Generative Vision",
      "AI Safety, Alignment & Digital Trust",
      "Generative Modeling in Science & Engineering",
    ],
  },
  {
    number: "03",
    title: "Optical Communication & Photonics",
    description:
      "Innovations in photonics, optical networks, high-speed communication, and sensing.",
    topics: [
      "Free-Space Optics (FSO) & LiFi",
      "Fiber-Optic Sensor Networks & Coherent Transmission",
      "Photonic Integrated Circuits (PICs)",
      "Quantum Optical Networks",
      "Visible Light Communication (VLC)",
    ],
  },
  {
    number: "04",
    title: "Chemical Technology & Material Science",
    description:
      "Bridging computational methods, advanced materials, chemistry, and sustainable technologies.",
    topics: [
      "Computational Chemistry & Molecular Simulation",
      "Green Chemical Processes & Nanotechnology",
      "AI/ML for Drug Discovery & Material Design",
      "Polymers, Catalysis & Environmental Chemistry",
    ],
  },
  {
    number: "05",
    title: "Cybersecurity & AI-Driven Defense",
    description:
      "Exploring AI-driven cybersecurity, threat detection, and resilient digital infrastructures.",
    topics: [
      "AI for Threat Detection & Intrusion Prevention",
      "Adversarial Machine Learning & Security",
      "Secure Multi-Party Computation & Privacy-Preserving AI",
      "Blockchain & Decentralized Security Solutions",
    ],
  },
  {
    number: "06",
    title: "Robotics & Autonomous Systems",
    description:
      "Advancing intelligent automation, multi-agent systems, and human-robot interaction.",
    topics: [
      "Autonomous Vehicles & UAVs",
      "Reinforcement Learning for Robotics",
      "Robot Vision & Perception",
      "Swarm Robotics & Multi-Agent Systems",
    ],
  },
  {
    number: "07",
    title: "Internet of Things (IoT) & Edge Computing",
    description:
      "Enhancing connectivity, real-time processing, and intelligence at the network edge.",
    topics: [
      "Industrial IoT (IIoT) & Cyber-Physical Systems",
      "Edge AI & Federated Learning",
      "Low-Power Wide-Area Networks (LPWAN)",
      "IoT Security & Trust Management",
    ],
  },
  {
    number: "08",
    title: "6G Networks & Wireless Communications",
    description:
      "Shaping the future of mobile connectivity, terahertz communication, and smart networks.",
    topics: [
      "Terahertz (THz) Communications",
      "Reconfigurable Intelligent Surfaces (RIS)",
      "Massive MIMO & Beamforming",
      "Semantic Communications",
    ],
  },
  {
    number: "09",
    title: "Bioinformatics & Computational Biology",
    description:
      "Leveraging computational tools and data science to solve complex biological problems.",
    topics: [
      "Genomics & Sequence Analysis",
      "Structural Biology & Protein Folding AI",
      "Medical Imaging & Diagnostic AI",
      "Systems Biology & Network Medicine",
    ],
  },
  {
    number: "10",
    title: "Sustainable Energy & Smart Grids",
    description:
      "Integrating renewable resources, intelligent distribution, and green tech innovations.",
    topics: [
      "Renewable Energy Integration & Storage",
      "Smart Grid Optimization & Machine Learning",
      "Microgrids & Decentralized Energy",
      "Energy Harvesting Technologies",
    ],
  },
  {
    number: "11",
    title: "Data Science & Big Data Analytics",
    description:
      "Extracting actionable insights from massive datasets through advanced analytical frameworks.",
    topics: [
      "Real-Time Stream Processing & Analytics",
      "Graph Neural Networks (GNNs) & Graph Mining",
      "Scalable Data Architectures",
      "Time-Series Analysis & Predictive Modeling",
    ],
  },
  {
    number: "12",
    title: "Extended Reality (XR) & Spatial Computing",
    description:
      "Creating immersive environments and bridging physical and digital worlds.",
    topics: [
      "Virtual, Augmented, & Mixed Reality (VR/AR/MR)",
      "3D Reconstruction & Digital Twins",
      "Haptics & Human-Computer Interaction (HCI)",
      "Metaverse Technologies & Architectures",
    ],
  },
  {
    number: "13",
    title: "Space Technologies & Aerospace Systems",
    description:
      "Innovations in satellite communication, deep space networks, and aerospace engineering.",
    topics: [
      "Satellite IoT (SatIoT) & Non-Terrestrial Networks",
      "Earth Observation & Remote Sensing AI",
      "Orbital Debris Tracking & Collision Avoidance",
      "Deep Space Communications",
    ],
  }
];

  return (
    <section
      id="tracks"
      className="relative w-full overflow-hidden bg-slate-950 py-20 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Call for Papers
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Conference Tracks
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We invite original, unpublished research contributions across
            interdisciplinary areas spanning quantum technologies, artificial
            intelligence, photonics, chemistry, and advanced materials.
          </p>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <article
              key={track.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900 sm:p-7"
            >
              {/* Track number */}
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-cyan-400/20">
                  {track.number}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Track
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
                {track.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {track.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-800 transition-colors duration-300 group-hover:bg-cyan-400/20" />

              {/* Topics */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key Topics
              </p>

              <ul className="space-y-3">
                {track.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-5 text-slate-300"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 text-[9px] text-cyan-400">
                      ✓
                    </span>

                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CFP note */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-5 text-center">
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-slate-200">
              Interdisciplinary research is encouraged.
            </span>{" "}
            Contributions that connect multiple tracks and demonstrate
            real-world impact are especially welcome.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <Link
    href="/submission-guidelines"
    className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
  >
    Submission Guidelines
  </Link>

  <Link
    href="/author-guidelines"
    className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
  >
    Author Guidelines
  </Link>

  <Link
    href="/how-to-submit"
    className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
  >
    How to Submit →
  </Link>
</div>
    </section>
  );
}