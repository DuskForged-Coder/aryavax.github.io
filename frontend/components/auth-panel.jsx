"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { loginUser, registerUser } from "@/lib/api";

const copyMap = {
  login: {
    tag: "Secure Login",
    title: "Authenticate into the ARYAVAX network.",
    subtitle:
      "Use your credentials to enter the system. Every interaction is framed like a controlled access checkpoint.",
    primaryLabel: "Access System",
    secondaryLabel: "Login"
  },
  register: {
    tag: "System Onboarding",
    title: "Create your access signature.",
    subtitle:
      "Register as if you are stepping into a private cyber network, with a clean and deliberate onboarding flow.",
    primaryLabel: "Create Access"
  },
  recovery: {
    tag: "Recovery Channel",
    title: "Restore system access.",
    subtitle:
      "For secure recovery, transmit your email and continue through the guided reset channel.",
    primaryLabel: "Request Recovery"
  }
};

function persistSession(payload, remember) {
  if (typeof window === "undefined") {
    return;
  }

  const activeStorage = remember ? window.localStorage : window.sessionStorage;
  const inactiveStorage = remember ? window.sessionStorage : window.localStorage;

  inactiveStorage.removeItem("aryavax_token");
  inactiveStorage.removeItem("aryavax_user");
  activeStorage.setItem("aryavax_token", payload.token);
  activeStorage.setItem("aryavax_user", JSON.stringify(payload.user));
}

export default function AuthPanel({ mode }) {
  const router = useRouter();
  const view = copyMap[mode];
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const submitAction = event.nativeEvent.submitter?.value || view.primaryLabel;

    if (mode === "recovery") {
      if (!form.email.trim()) {
        setError("Provide the email linked to your access profile.");
        return;
      }

      setSuccess(
        "Recovery request staged. For production reset delivery, connect your preferred email provider on the backend."
      );
      return;
    }

    if (!form.email.trim() || !form.password.trim()) {
      setError("Email and password are required.");
      return;
    }

    if (mode === "register") {
      if (!form.fullName.trim()) {
        setError("Full name is required.");
        return;
      }

      if (form.password.length < 8) {
        setError("Passwords should be at least 8 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Password confirmation does not match.");
        return;
      }
    }

    setLoading(true);

    try {
      const payload =
        mode === "login"
          ? await loginUser({
              email: form.email,
              password: form.password
            })
          : await registerUser({
              fullName: form.fullName,
              email: form.email,
              password: form.password
            });

      persistSession(payload, remember);

      setSuccess(
        submitAction === "Login"
          ? "Credentials verified. Login sequence complete."
          : "Access granted. Redirecting to the command center."
      );

      window.setTimeout(() => {
        router.push("/");
      }, 900);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay" />
        <div className="scanline-layer" />
        <div className="absolute -left-16 top-10 h-80 w-80 rounded-full bg-neon/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <div className="hidden flex-col justify-between px-8 py-8 lg:flex">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-[radial-gradient(circle,rgba(91,247,255,0.18),rgba(58,183,255,0.08)_58%,rgba(0,0,0,0.12)_100%)] shadow-neon">
                <Image
                  src="/logo.png"
                  alt="ARYAVAX logo"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(91,247,255,0.35)]"
                />
              </div>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-white">
                  ARYAVAX
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/[0.42]">
                  Secure System Interface
                </p>
              </div>
            </Link>
            <Link href="/" className="ghost-button px-5 py-3 text-[0.78rem]">
              Return
            </Link>
          </div>

          <div>
            <div className="section-tag">{view.tag}</div>
            <h1 className="mt-6 max-w-xl font-display text-5xl font-bold uppercase leading-none tracking-[0.08em] text-white">
              {view.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/[0.64]">
              {view.subtitle}
            </p>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
              {[
                ["Identity Check", "Encrypted"],
                ["Session Mode", remember ? "Persistent" : "Transient"],
                ["Surface Status", "Hardened"],
                ["Protocol Layer", "ARYAVAX"]
              ].map(([label, value]) => (
                <div key={label} className="hud-card">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.38]">
                    {label}
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.12em] text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-white/[0.36]">
            Defend the future through strong systems and controlled access.
          </p>
        </div>

        <div className="flex items-center justify-center px-5 py-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="panel w-full max-w-xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="section-tag">{view.tag}</div>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[0.1em] text-white">
                  {mode === "login" && "Access Control"}
                  {mode === "register" && "Provision Identity"}
                  {mode === "recovery" && "Reset Sequence"}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/[0.6]">
                  {view.subtitle}
                </p>
              </div>
              <div className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-cyan">
                {mode}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {mode === "register" && (
                <label className="block">
                  <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.46]">
                    Full Name
                  </span>
                  <input
                    className="system-input"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Aditya Narayan Rautaray"
                  />
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.46]">
                  Email
                </span>
                <input
                  className="system-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="operator@aryavax.com"
                />
              </label>

              {mode !== "recovery" && (
                <label className="block">
                  <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.46]">
                    Password
                  </span>
                  <input
                    className="system-input"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your secure key"
                  />
                </label>
              )}

              {mode === "register" && (
                <label className="block">
                  <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.46]">
                    Confirm Password
                  </span>
                  <input
                    className="system-input"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your secure key"
                  />
                </label>
              )}

              {mode !== "recovery" && (
                <div className="flex flex-col gap-4 rounded-[22px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setRemember((current) => !current)}
                    className="flex items-center gap-3 text-left"
                  >
                    <span className="toggle-shell" data-active={remember}>
                      <span className="toggle-knob" />
                    </span>
                    <span>
                      <span className="block text-[0.74rem] uppercase tracking-[0.18em] text-white/[0.48]">
                        Remember me
                      </span>
                      <span className="mt-1 block text-sm text-white/[0.6]">
                        {remember
                          ? "Keep the session ready for future entry."
                          : "Use a temporary session on this device."}
                      </span>
                    </span>
                  </button>

                  {mode === "login" && (
                    <Link
                      href="/access/recovery"
                      className="text-[0.74rem] uppercase tracking-[0.18em] text-cyan transition-colors hover:text-white"
                    >
                      Forgot password
                    </Link>
                  )}
                </div>
              )}

              {error && (
                <div className="rounded-[20px] border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-[20px] border border-cyan/20 bg-cyan/10 px-4 py-3 text-sm text-cyan">
                  {success}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                {mode === "login" && (
                  <button
                    type="submit"
                    value="Login"
                    className="ghost-button flex-1 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={loading}
                  >
                    {loading ? "Authorizing..." : view.secondaryLabel}
                  </button>
                )}

                <button
                  type="submit"
                  value={view.primaryLabel}
                  className="system-button flex-1 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? "Processing..." : view.primaryLabel}
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.42]">
              {mode === "login" && (
                <p>
                  No access profile yet?{" "}
                  <Link href="/access/register" className="text-cyan hover:text-white">
                    Create one
                  </Link>
                </p>
              )}
              {mode === "register" && (
                <p>
                  Already registered?{" "}
                  <Link href="/access/login" className="text-cyan hover:text-white">
                    Login
                  </Link>
                </p>
              )}
              {mode === "recovery" && (
                <p>
                  Remembered your credentials?{" "}
                  <Link href="/access/login" className="text-cyan hover:text-white">
                    Return to login
                  </Link>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
