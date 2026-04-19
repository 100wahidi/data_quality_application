import { ArrowRight, BarChart3, Database, FileCheck2, Gauge, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pipelineSteps = [
  {
    title: '1. Data intake',
    description: 'The application loads the reference dataset, staff mapping, and KRI dictionary that feed the workflow.',
    icon: Database,
  },
  {
    title: '2. Validation',
    description: 'Rules check identifiers, dates, status values, and exposure values before the data moves forward.',
    icon: FileCheck2,
  },
  {
    title: '3. Calculation',
    description: 'The KRI engine combines the entered values with the backend mapping to assign the right KRI identity.',
    icon: Layers3,
  },
  {
    title: '4. Review and output',
    description: 'The platform shows the calculated rows, highlights quality signals, and prepares the results for analysis.',
    icon: BarChart3,
  },
];

const roleCards = [
  {
    title: 'Single control point',
    description: 'One interface for entering KRI input and launching the calculation flow.',
    icon: ShieldCheck,
  },
  {
    title: 'Operational visibility',
    description: 'The screen makes the data path visible so users understand what the backend is doing.',
    icon: Gauge,
  },
  {
    title: 'Decision support',
    description: 'Results are structured for review, export, and downstream analytics.',
    icon: Sparkles,
  },
];

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.20),transparent_30%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_26%),linear-gradient(180deg,#070b14_0%,#0b1020_52%,#0f172a_100%)] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col rounded-[32px] border border-white/8 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:flex-row">
        <section className="relative flex flex-1 flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.14),transparent_22%)]" />

          <div className="relative space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Data Quality Control Tower
            </div>

            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                KRI workflow,
                <span className="block text-slate-300">explained end to end.</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                This application gives a pragmatic front door for the KRI data pipeline: enter the business signal, validate the data path, calculate the KRI, and review the resulting rows from one place.
              </p>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/8 bg-slate-950/50 p-5 shadow-lg shadow-black/10 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-amber-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="flex w-full max-w-xl flex-col justify-center border-t border-white/8 bg-slate-950/60 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Workspace access
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Enter the KRI workspace</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              The app is designed to guide data users through the operational path: input, validation, calculation, and result review. No extra friction, only the actions needed to run the workflow.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/8 bg-white/5 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Application role</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {roleCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-cyan-200 ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-[linear-gradient(135deg,rgba(244,63,94,0.14),rgba(15,23,42,0.7))] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">Why this page exists</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <p>• Capture the business input once.</p>
                <p>• Make the data pipeline visible to the user.</p>
                <p>• Move directly into the calculator with a clear operational context.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/kri-calculation')}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(244,63,94,0.28)] transition hover:brightness-110"
            >
              Enter workspace
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs leading-6 text-slate-500">
              Built for fast KRI entry, transparent processing, and practical data review.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
