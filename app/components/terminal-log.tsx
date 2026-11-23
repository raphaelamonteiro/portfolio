'use client';

import { useState, useEffect } from 'react';

const LOGS = [
  "[SYS_INIT] Core systems online",
  "[NET_UPLINK] Secure connection established",
  "[COMPILER] Building SPRB-BD architecture...",
  "[TEST_RUN] 137/137 tests passed",
  "[AI_MODULE] Camplana inference engine ready",
  "[SYS_CHECK] All telemetry pipelines nominal",
];

export function TerminalLog() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGS.length);
      setTime(new Date().toLocaleTimeString());
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-4 space-y-2 font-mono text-[11px] leading-relaxed text-ash relative z-10 min-h-[52px]">
      {/* Show current log with smoothly blinking cursor */}
      <p className="truncate">
        <span className="text-ash/60">[ {time || '00:00:00'} ]</span>{' '}
        <span className="text-bone animate-pulse">{LOGS[index]}</span>
        <span className="inline-block w-2 h-3 bg-amethyst ml-1 align-middle animate-[blink_1s_ease-in-out_infinite]" />
      </p>
      {/* Show previous log blurred/faded */}
      <p className="opacity-50 truncate">
        <span className="text-ash/60">[ PREV ]</span>{' '}
        {LOGS[(index - 1 + LOGS.length) % LOGS.length]}
      </p>
    </div>
  );
}
