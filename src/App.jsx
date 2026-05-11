import { Logo } from './components/Logo';
import { howItWorks, stats, services, features, workflow } from './data/index';

export default function AlphaTechLegalWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-white">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 py-5 backdrop-blur md:px-20">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#workflow" className="transition hover:text-white">
            Workflow
          </a>
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
        </div>

        <button className="rounded-xl bg-blue-500 px-5 py-2 font-medium transition hover:scale-105 hover:bg-blue-600">
          Get Started
        </button>
      </nav>

      <section
        id="home"
        className="grid items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-20"
      >
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Smart Legal Information Platform
          </p>

          <h2 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Your AI Powered
            <span className="text-blue-400"> Legal Assistant</span>
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
            Alpha Tech helps citizens, students, startups, and businesses access
            legal information instantly using AI-powered assistance.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-4xl transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 p-8 shadow-2xl">
          <div className="absolute inset-0 animate-pulse bg-blue-500/5"></div>

          <div className="relative rounded-2xl bg-slate-900 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-6 text-sm">
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
                <p className="text-slate-300">User Typing...</p>

                <div className="mt-3 flex gap-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
                </div>

                <p className="mt-4 animate-pulse font-medium text-white">
                  "How can I file a consumer complaint online?"
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-12 w-1 animate-pulse rounded-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-blue-500/20 p-5 text-slate-200">
                <div className="absolute left-0 top-0 h-1 w-full animate-pulse bg-blue-400"></div>

                <p className="mb-3 font-semibold text-blue-300">
                  AI Responding...
                </p>

                <p className="animate-pulse leading-relaxed">
                  The AI assistant explains complaint filing procedures,
                  required documents, consumer rights, and next legal steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-20">
        {stats.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center"
          >
            <h3 className="mb-2 text-3xl font-bold text-blue-400">
              {item.value}
            </h3>
            <p className="text-slate-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section id="services" className="px-6 py-24 md:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>

          <p className="mx-auto max-w-2xl text-slate-400">
            Explore advanced legal assistance services designed for modern users.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-4xl transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

              <p className="leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="px-6 py-24 md:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-5 text-5xl font-bold">
            Client & Lawyer Workflow
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            A seamless process connecting clients and lawyers through an AI-powered legal platform.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {workflow.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="group w-[240px] rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/30 active:scale-95">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-3xl transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {item.rating && (
                  <div className="mt-5 text-center text-2xl text-yellow-400">
                    {item.rating}
                  </div>
                )}
              </div>

              {index !== workflow.length - 1 && (
                <div className="hidden animate-pulse text-4xl text-blue-400 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white">Features</h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Advanced AI-powered legal platform features designed for modern legal assistance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-4xl transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-12 md:px-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Logo />
            </div>

            <p className="text-slate-400">
              AI-powered legal information assistant platform.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-slate-400">
              <li>Home</li>
              <li>Services</li>
              <li>Workflow</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>

            <ul className="space-y-2 text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>

            <ul className="space-y-2 text-slate-400">
              <li>AI Legal Information Platform</li>
              <li>Modern Legal Assistance Solution</li>
              <li>Available 24/7 for Users</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Alpha Tech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
