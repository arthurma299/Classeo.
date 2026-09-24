"use client";

import { useState } from "react";

export default function SubmitButton() {
  const [pending, setPending] = useState(false);

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => setPending(true)}
      className="inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
    >
      {pending ? "Envoi..." : "Envoyer"}
    </button>
  );
}
