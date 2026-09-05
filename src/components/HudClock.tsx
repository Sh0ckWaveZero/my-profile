"use client";

import { useEffect, useState } from "react";

const PLACEHOLDER = "--:--:--";

/** Live Bangkok clock — the only interactive-JS element in the hero. */
export function HudClock() {
  const [time, setTime] = useState(PLACEHOLDER);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Bangkok",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontSize: "0.75rem",
        letterSpacing: "0.14em",
        color: "var(--hud-ink-2)",
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "nowrap",
      }}
    >
      {time} ICT
      <span className="hud-live" style={{ color: "var(--hud-signal)", marginLeft: "0.75rem" }}>
        ◉ LIVE
      </span>
    </span>
  );
}
