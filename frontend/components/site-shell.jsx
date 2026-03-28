"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SystemNav from "@/components/system-nav";

const philosophy = [
  {
    title: "Discipline",
    text: "Precision over noise. Every move serves the mission."
  },
  {
    title: "Strategy",
    text: "Threats are mapped before they surface. Systems are built to outlast change."
  },
  {
    title: "System Thinking",
    text: "Strong architecture turns complexity into controlled power."
  }
];

const services = [
  {
    title: "Website Security",
    text: "Hardening digital surfaces, reducing attack exposure, and designing resilient public systems."
  },
  {
    title: "Vulnerability Testing",
    text: "Structured assessment workflows for weak points, exploit paths, and recovery readiness."
  },
  {
    title: "Protection Systems",
    text: "Defense layers engineered for visibility, containment, and long-term operational trust."
  }
];

const projects = [
  {
    title: "AVA-Core",
    type: "System Architecture",
    text: "A central intelligence layer for orchestrating security insight, automation, and visibility."
  },
  {
    title: "ONIX",
    type: "Operational Platform",
    text: "A dark-interface command environment shaped for elite workflows, focus, and systems control."
  },
  {
    title: "Cybersecurity Tools",
    type: "Defensive Utility Stack",
    text: "Purpose-built modules for scanning, analysis, reinforcement, and secure operations."
  }
];

const skills = [
  { label: "Cybersecurity", value: 94 },
  { label: "Web Development", value: 91 },
  { label: "AI Systems", value: 88 },
  { label: "System Design", value: 92 }
];

const interests = [
  "Cybersecurity",
  "System building",
  "Animation",
  "Strategic thinking"
];

const contactLinks = [
  {
    label: "Email",
    value: "adityanarayanrautaray@gmail.com",
    href: "mailto:adityanarayanrautaray@gmail.com"
  },
  {
    label: "Phone",
    value: "+91 8882337893",
    href: "tel:+918882337893"
  },
  {
    label: "LinkedIn / Personal",
    value: "aditya-narayan-rautaray-92b05b272",
    href: "https://www.linkedin.com/in/aditya-narayan-rautaray-92b05b272/"
  },
  {
    label: "LinkedIn / Company",
    value: "ARYAVAX",
    href: "https://www.linkedin.com/company/aryavax"
  }
];

const container = {
  hidden: { opacity: 0, y: 22 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function SectionHeader({ tag, title, copy }) {
  return (
    <div className="max-w-3xl">
      <div className="section-tag">{tag}</div>
      <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[0.12em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.68] sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function Particles() {
  return (
    <>
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${(index * 13) % 100}%`,
            top: `${(index * 17) % 100}%`,
            ["--delay"]: `${index * 0.22}s`,
            ["--duration"]: `${7 + (index % 5)}s`
          }}
        />
      ))}
    </>
  );
}

export default function SiteShell() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="grid-overlay" />
        <div className="scanline-layer" />
        <div className="absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(circle_at_top,rgba(58,183,255,0.2),transparent_60%)]" />
        <Particles />
      </div>

      <SystemNav />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={container}>
            <div className="section-tag">ARYAVAX // Secure Entry</div>
            <h1 className="mt-6 max-w-4xl font-display text-[2.8rem] font-bold uppercase leading-[0.95] tracking-[0.08em] text-white sm:text-[4rem] lg:text-[5rem]">
              Building Digital Fortresses. Defending the Future.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
              Aditya Narayan Rautaray crafts a cybernetic brand presence that feels less like a portfolio and more like a secure command center. ARYAVAX stands for disciplined architecture, sharp defense, and systems engineered to endure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/access/login" className="system-button">
                Enter the System
              </Link>
              <a href="#aryavax" className="ghost-button">
                View Security Protocols
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Threat Model", "Adaptive Defense"],
                ["Build Standard", "Elite Minimal"],
                ["System State", "Operational"]
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  custom={index + 1}
                  initial="hidden"
                  animate="show"
                  variants={container}
                  className="hud-card security-line"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.42]">
                    {label}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold uppercase tracking-[0.12em] text-white">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="panel px-6 py-8 sm:px-8"
          >
            <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.2em] text-white/[0.45]">
              <span>AI Defense Matrix</span>
              <span className="flex items-center gap-2">
                <span className="status-ping" />
                Live Sync
              </span>
            </div>

            <div className="mt-8 logo-core">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[30%] rounded-full border border-cyan/25 bg-cyan/10 blur-2xl"
              />
              <div className="logo-center">
                <Image
                  src="/logo.png"
                  alt="ARYAVAX emblem"
                  width={220}
                  height={220}
                  priority
                  className="h-[74%] w-[74%] object-contain brightness-110 contrast-125 drop-shadow-[0_0_34px_rgba(91,247,255,0.35)]"
                />
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/25 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-white">
                    ARYAVAX
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/[0.58]">
                    Command-grade identity for personal ambition, cybersecurity strategy, and next-generation digital defense.
                  </p>
                </div>
                <div className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-cyan">
                  Level 01
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Integrity", "99.97%"],
                  ["Latency", "12ms"],
                  ["Visibility", "Full Spectrum"],
                  ["Mode", "Fortress"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.38]">
                      {label}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.12em] text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            tag="About / Philosophy"
            title="Sharp, disciplined, and built for control."
            copy="This presence is intentionally minimal, but every signal carries weight. The philosophy is simple: think in systems, operate with discipline, and build from strategy rather than trend."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={container}
                className="panel p-6"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan/70">
                  Core Signal {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[0.14em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="aryavax" className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <SectionHeader
            tag="ARYAVAX"
            title="Cybersecurity as architecture, not decoration."
            copy="ARYAVAX is positioned as a focused cybersecurity company grounded in hardened systems, intelligent assessment, and future-facing protection design. The mission is to secure digital environments without compromising clarity, speed, or ambition."
          />

          <div className="panel p-7">
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={container}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/[0.62]">{service.text}</p>
                    </div>
                    <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 text-[0.72rem] uppercase tracking-[0.18em] text-cyan md:flex">
                      0{index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-cyan/[0.15] bg-cyan/5 p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cyan/[0.72]">
                Future Vision
              </p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">
                Scale ARYAVAX into a recognizable digital defense brand where personal expertise, modern interfaces, and security-first engineering converge into one clear identity.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <SectionHeader
            tag="Projects"
            title="Glowing modules for focused execution."
            copy="Each project is presented like a system block inside the command center, emphasizing function, control, and high-signal presence."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -8, boxShadow: "0 0 42px rgba(58,183,255,0.18)" }}
                viewport={{ once: true, amount: 0.28 }}
                variants={container}
                className="panel group p-6 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/[0.42]">
                    {project.type}
                  </p>
                  <div className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-cyan">
                    Active
                  </div>
                </div>
                <h3 className="mt-7 font-display text-3xl font-semibold uppercase tracking-[0.12em] text-white transition-colors group-hover:text-cyan">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.64]">{project.text}</p>
                <div className="mt-8 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.16em] text-white/[0.44]">
                  <span>Hover Response Enabled</span>
                  <span className="status-ping" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            tag="Skills"
            title="Animated capability mapping."
            copy="The capability layer highlights core areas of execution with motion-driven bars and system labels to keep the section technical, clean, and alive."
          />

          <div className="panel p-7">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={container}
                >
                  <div className="mb-3 flex items-center justify-between text-sm uppercase tracking-[0.16em] text-white/[0.72]">
                    <span>{skill.label}</span>
                    <span className="text-cyan">{skill.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.95, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(58,183,255,0.86),rgba(91,247,255,0.98))] shadow-[0_0_24px_rgba(91,247,255,0.3)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Threat modeling",
                "Identity systems",
                "Frontend engineering",
                "Secure architecture"
              ].map((node) => (
                <div key={node} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm uppercase tracking-[0.16em] text-white/[0.66]">
                  {node}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="space-y-8">
          <SectionHeader
            tag="Manifesto"
            title="Encrypted intent, visible in plain sight."
            copy="This section behaves like a terminal window inside the system. The tone is direct, compact, and uncompromising."
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="terminal-shell relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-2 border-b border-white/[0.08] px-5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-[0.72rem] uppercase tracking-[0.2em] text-white/[0.38]">
                encrypted-manifesto.sh
              </span>
            </div>

            <div className="relative z-10 mt-6 rounded-[22px] border border-cyan/[0.14] bg-cyan/[0.035] px-5 py-5">
              <div className="terminal-copy space-y-1 font-mono text-sm leading-8 sm:text-base">
                <p>&gt; Security is power.</p>
                <p>&gt; I build systems, not trends.</p>
                <p>&gt; Design should signal control before it speaks.</p>
                <p>&gt; Strong infrastructure is quiet, intelligent, and relentless.</p>
                <p>&gt; The future belongs to those who can defend what they create.</p>
                <p>
                  &gt; protocol_status: armed
                  <span className="cursor" />
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="personal" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            tag="Personal Side"
            title="A system builder with a strategist’s mindset."
            copy="Beyond the company identity, the personal layer reflects curiosity around animation, controlled interfaces, and long-horizon thinking. The goal is always the same: turn ideas into systems with character."
          />

          <div className="panel p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={container}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/[0.38]">
                    Interest Node 0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.12em] text-white">
                    {interest}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-cyan/[0.15] bg-cyan/5 p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cyan/[0.72]">
                Personal Signature
              </p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">
                Minimal on the surface, but engineered with intent underneath. The personal brand is meant to feel unmistakably deliberate, confident, and built for larger ambitions.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            tag="Contact"
            title="Secure communication channels."
            copy="A clean final checkpoint for direct contact, company visibility, and protected outreach paths."
          />

          <div className="panel p-7">
            <div className="rounded-[26px] border border-cyan/[0.15] bg-black/20 p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cyan/[0.72]">
                Transmission Window
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.12em] text-white">
                Secure Communication UI
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/[0.62]">
                For collaborations, cybersecurity inquiries, company outreach, or strategic work, use the channels below to connect directly with Aditya Narayan Rautaray and ARYAVAX.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {contactLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ x: 6 }}
                  viewport={{ once: true, amount: 0.35 }}
                  variants={container}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-cyan/25 hover:bg-cyan/5"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/[0.38]">
                    {item.label}
                  </p>
                  <p className="mt-2 break-all font-display text-lg font-semibold uppercase tracking-[0.08em] text-white">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
