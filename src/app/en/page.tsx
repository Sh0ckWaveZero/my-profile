"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CONTEXT_KEYS = [
  "hn",
  "visitId",
  "orderNumber",
  "patientOrderItemId",
  "patientId",
  "patientVisitId",
  "token",
  "hospitalId",
  "hospitalCode",
  "hospitalName",
  "parentHospitalId",
  "userId",
  "userCode",
  "userName",
  "departmentId",
  "departmentCode",
  "departmentName",
  "roleId",
  "roleCode",
  "roleName",
  "userLocale",
] as const;

function HandlerInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const ctx: Record<string, string> = {};
    for (const key of CONTEXT_KEYS) {
      const val = searchParams.get(key);
      if (val) ctx[key] = val;
    }
    sessionStorage.setItem("medhis_context", JSON.stringify(ctx));
    const redirect = searchParams.get("redirect");
    router.replace(redirect ? `/en/${redirect}` : "/en/worklist/check-in");
  }, [router, searchParams]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "oklch(0.97 0.007 260)",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", color: "oklch(0.55 0.015 260)" }}>
        <SpinnerRing />
        <p style={{ fontSize: 13, margin: "12px 0 0", letterSpacing: "0.01em" }}>
          Redirecting…
        </p>
      </div>
    </div>
  );
}

function SpinnerRing() {
  return (
    <>
      <style>{`
        @keyframes _spin { to { transform: rotate(360deg); } }
        ._spinner {
          width: 24px; height: 24px;
          border: 2px solid oklch(0.88 0.01 260);
          border-top-color: oklch(0.45 0.16 255);
          border-radius: 50%;
          animation: _spin 0.65s linear infinite;
          margin: 0 auto;
        }
      `}</style>
      <div className="_spinner" aria-hidden="true" />
    </>
  );
}

export default function EnPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{ minHeight: "100dvh", background: "oklch(0.97 0.007 260)" }}
        />
      }
    >
      <HandlerInner />
    </Suspense>
  );
}
