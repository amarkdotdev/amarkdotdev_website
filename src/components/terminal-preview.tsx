"use client";

import { motion, useReducedMotion } from "framer-motion";

type Line =
  | { type: "cmd"; text: string }
  | { type: "dim"; text: string }
  | { type: "info"; text: string }
  | { type: "ok"; text: string }
  | { type: "deploy"; text: string }
  | { type: "pod"; name: string; status: string }
  | { type: "blank" };

const lines: Line[] = [
  { type: "cmd", text: "kubectl get pods -n production" },
  { type: "dim", text: "NAME                        READY   STATUS" },
  { type: "pod", name: "api-gateway-7d9b8f-xk2m", status: "Running" },
  { type: "pod", name: "vault-agent-injector-58cf", status: "Running" },
  { type: "pod", name: "otel-collector-xyz9f", status: "Running" },
  { type: "pod", name: "keda-operator-5c7d4-p9q", status: "Running" },
  { type: "blank" },
  { type: "cmd", text: "patchpulse scan --pr 142 --env prod" },
  { type: "info", text: "  Analyzing 6 manifest changes..." },
  { type: "ok", text: "  Risk: LOW — no critical changes" },
  { type: "ok", text: "  Vault: 23 secrets synced, 0 expiring" },
  { type: "ok", text: "  Policy: 0 gate violations" },
  { type: "deploy", text: "  Ready to deploy" },
];

function Line({ line }: { line: Line }) {
  if (line.type === "blank") return <div className="h-2" />;

  if (line.type === "cmd") {
    return (
      <div className="flex gap-2">
        <span className="select-none text-cyan-400">$</span>
        <span className="text-zinc-100">{line.text}</span>
      </div>
    );
  }

  if (line.type === "dim") {
    return <div className="text-zinc-600">{line.text}</div>;
  }

  if (line.type === "pod") {
    return (
      <div className="flex items-center justify-between gap-4">
        <span className="truncate text-zinc-300">{line.name}</span>
        <span className="flex shrink-0 gap-3 tabular-nums">
          <span className="text-zinc-500">1/1</span>
          <span className="text-emerald-400">{line.status}</span>
        </span>
      </div>
    );
  }

  if (line.type === "info") {
    return <div className="text-zinc-400">{line.text}</div>;
  }

  if (line.type === "ok") {
    const body = line.text.replace(/^\s*/, "");
    return (
      <div>
        <span className="text-zinc-600">{"  "}</span>
        <span className="text-emerald-400">✓</span>
        <span className="text-zinc-300">{"  " + body}</span>
      </div>
    );
  }

  if (line.type === "deploy") {
    return (
      <div className="font-semibold">
        <span className="text-zinc-600">{"  "}</span>
        <span className="text-cyan-400">→</span>
        <span className="text-zinc-100">{"  " + line.text.trim()}</span>
      </div>
    );
  }

  return null;
}

export function TerminalPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
      }
      className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] shadow-2xl"
    >
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-zinc-500">
          production-cluster — bash
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5">
        <motion.div
          className="space-y-[3px] font-mono text-[12.5px] leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.1,
                delayChildren: prefersReducedMotion ? 0 : 0.5,
              },
            },
          }}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.15 } },
              }}
            >
              <Line line={line} />
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.div
            className="mt-2 flex items-center gap-2"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.15 } },
            }}
          >
            <span className="text-cyan-400">$</span>
            <span
              className="inline-block h-[13px] w-[6px] rounded-[1px] bg-cyan-400/80"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "terminal-blink 1.1s step-end infinite",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0d0d12]/60 to-transparent" />
    </motion.div>
  );
}
