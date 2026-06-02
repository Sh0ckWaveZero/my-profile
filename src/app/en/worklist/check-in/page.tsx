"use client";

import { useEffect, useState } from "react";

type MedhisContext = {
  hn?: string;
  visitId?: string;
  orderNumber?: string;
  patientOrderItemId?: string;
  patientId?: string;
  patientVisitId?: string;
  token?: string;
  hospitalId?: string;
  hospitalCode?: string;
  hospitalName?: string;
  parentHospitalId?: string;
  userId?: string;
  userCode?: string;
  userName?: string;
  departmentId?: string;
  departmentCode?: string;
  departmentName?: string;
  roleId?: string;
  roleCode?: string;
  roleName?: string;
  userLocale?: string;
};

function mask(id?: string) {
  if (!id) return undefined;
  return id.length <= 10 ? id : id.slice(0, 10) + "…";
}

function combine(a?: string, b?: string): string | undefined {
  if (a && b) return `${b} (${a})`;
  return b ?? a;
}

function Field({
  label,
  value,
  mono = false,
  span = false,
}: {
  label: string;
  value?: string;
  mono?: boolean;
  span?: boolean;
}) {
  return (
    <div
      style={
        span
          ? { display: "flex", flexDirection: "column", gap: 4, gridColumn: "1 / -1" }
          : { display: "flex", flexDirection: "column", gap: 4 }
      }
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          color: "oklch(0.55 0.015 260)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: mono ? 12 : 14,
          fontWeight: 500,
          lineHeight: "1.4",
          color: value ? "oklch(0.15 0.02 260)" : "oklch(0.72 0.01 260)",
          fontFamily: mono
            ? "var(--font-geist-mono), 'Courier New', monospace"
            : undefined,
          wordBreak: "break-all",
        }}
      >
        {value ?? "—"}
      </span>
    </div>
  );
}

function Card({
  label,
  tag,
  children,
}: {
  label: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "oklch(1.0 0.002 260)",
        border: "1px solid oklch(0.88 0.01 260)",
        borderRadius: 8,
      }}
    >
      <div
        style={{
          padding: "9px 16px",
          borderBottom: "1px solid oklch(0.90 0.008 260)",
          background: "oklch(0.965 0.006 260)",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.09em",
            color: "oklch(0.40 0.17 255)",
          }}
        >
          {label}
        </span>
        {tag && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 500,
              color: "oklch(0.60 0.012 260)",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.02em",
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <div
        style={{
          padding: 16,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px 28px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function CheckInPage() {
  const [ctx, setCtx] = useState<MedhisContext | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem("medhis_context");
    if (raw) {
      try {
        setCtx(JSON.parse(raw));
      } catch {
        setCtx({});
      }
    } else {
      setCtx({});
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div
        style={{ minHeight: "100dvh", background: "oklch(0.97 0.007 260)" }}
      />
    );
  }

  const hasData = ctx && Object.keys(ctx).length > 0;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "oklch(0.97 0.007 260)",
        fontFamily:
          "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          background: "oklch(1.0 0.002 260)",
          borderBottom: "1px solid oklch(0.88 0.01 260)",
          padding: "0 24px",
          height: 48,
          display: "flex",
          alignItems: "center",
          gap: 6,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <a
          href="/en/worklist"
          style={{
            fontSize: 12,
            color: "oklch(0.50 0.015 260)",
            textDecoration: "none",
            fontWeight: 400,
          }}
        >
          Worklist
        </a>
        <span style={{ fontSize: 12, color: "oklch(0.75 0.01 260)" }}>
          /
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "oklch(0.18 0.02 260)",
          }}
        >
          Check-in
        </span>

        {ctx?.userLocale && (
          <span
            style={{
              marginLeft: "auto",
              fontSize: 11,
              fontWeight: 500,
              color: "oklch(0.55 0.015 260)",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.04em",
            }}
          >
            {ctx.userLocale.toUpperCase()}
          </span>
        )}
      </header>

      {/* Content */}
      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "32px 20px 72px",
        }}
      >
        {/* Heading row */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
              flexWrap: "wrap",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 600,
                color: "oklch(0.13 0.02 260)",
                letterSpacing: "-0.01em",
              }}
            >
              Blood Check-In
            </h1>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 20,
                padding: "0 7px",
                borderRadius: 4,
                background: "oklch(0.92 0.05 255)",
                color: "oklch(0.32 0.19 255)",
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                fontFamily: "var(--font-geist-mono), monospace",
                flexShrink: 0,
              }}
            >
              Blood Check-In
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "oklch(0.52 0.015 260)",
              lineHeight: "1.5",
            }}
          >
            Session context loaded from redirect. Verify before proceeding.
          </p>
        </div>

        {/* Empty state */}
        {!hasData ? (
          <div
            style={{
              padding: "56px 24px",
              textAlign: "center",
              background: "oklch(1.0 0.002 260)",
              border: "1px solid oklch(0.88 0.01 260)",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                fontSize: 32,
                marginBottom: 12,
                color: "oklch(0.80 0.01 260)",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              ∅
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 500,
                color: "oklch(0.35 0.02 260)",
                marginBottom: 6,
              }}
            >
              No session context
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "oklch(0.58 0.015 260)",
              }}
            >
              Navigate via the bloodbank portal link to load patient context.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Patient */}
            <Card label="Patient" tag={ctx?.hn ? `HN ${ctx.hn}` : undefined}>
              <Field label="HN" value={ctx?.hn} />
              <Field label="Visit ID" value={ctx?.visitId} />
              <Field label="Patient ID" value={ctx?.patientId} mono span />
              <Field label="Patient Visit ID" value={ctx?.patientVisitId} mono span />
            </Card>

            {/* Order */}
            <Card label="Order" tag={ctx?.orderNumber}>
              <Field label="Order Number" value={ctx?.orderNumber} />
              <Field label="Order Item ID" value={ctx?.patientOrderItemId} mono span />
            </Card>

            {/* Hospital */}
            <Card label="Hospital" tag={ctx?.hospitalCode}>
              <Field label="Code" value={ctx?.hospitalCode} />
              <Field label="Name" value={ctx?.hospitalName} />
              <Field label="Hospital ID" value={ctx?.hospitalId} mono span />
              <Field label="Parent Hospital ID" value={ctx?.parentHospitalId} mono span />
            </Card>

            {/* Operator */}
            <Card label="Operator" tag={ctx?.userCode}>
              <Field label="Name" value={ctx?.userName} />
              <Field label="Code" value={ctx?.userCode} />
              <Field
                label="Department"
                value={combine(ctx?.departmentCode, ctx?.departmentName)}
              />
              <Field
                label="Role"
                value={combine(ctx?.roleCode, ctx?.roleName)}
              />
              <Field label="User ID" value={ctx?.userId} mono span />
              <Field label="Department ID" value={ctx?.departmentId} mono span />
              <Field label="Role ID" value={ctx?.roleId} mono span />
            </Card>

            {/* Session */}
            <Card label="Session">
              <Field label="Token" value={mask(ctx?.token)} mono />
              <Field label="Locale" value={ctx?.userLocale} />
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
