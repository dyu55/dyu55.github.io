"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
export function WorkWithMeSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch("https://formspree.io/f/xwkgpqpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });
      setState(response.ok ? "success" : "error");
    } catch {
      setState("error");
    } finally {
      clearTimeout(timer);
    }
  }
  return (
    <section className="contact-panel shell" id="contact">
      <div>
        <p className="eyebrow">03 / Let’s connect</p>
        <h2>
          Have something
          <br />
          in mind?
        </h2>
        <p>
          I’m open to software engineering opportunities and conversations about
          useful products. Let’s start with a hello.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email me <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-links">
          <a
            href={profile.github}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href={profile.linkedin}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="subscribe">
        <h3>Occasional notes, directly to you.</h3>
        <p>Leave your email for project updates and engineering notes.</p>
        {state !== "success" && (
          <form onSubmit={subscribe}>
            <label htmlFor="subscribe-email">Your email</label>
            <div className="subscribe-fields">
              <input
                id="subscribe-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
              />
              <button type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Subscribe"}
              </button>
            </div>
          </form>
        )}
        <p className="subscribe-status" role="status" aria-live="polite">
          {state === "success"
            ? "Thanks — your email was received."
            : state === "error"
              ? "That didn’t go through. Please try again, or use the email link."
              : ""}
        </p>
      </div>
    </section>
  );
}
