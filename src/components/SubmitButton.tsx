"use client";

import { useState } from "react";

export default function SubmitButton() {
  const [pending, setPending] = useState(false);

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => {
        // Safari cancels the native form submission if the submit button is
        // disabled synchronously within its own click handler, so defer it.
        setTimeout(() => setPending(true), 0);
      }}
      className="inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
    >
      {pending ? "Envoi..." : "Envoyer"}
    </button>
  );
}
