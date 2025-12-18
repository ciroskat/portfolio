"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"it" | "en">("it");

  const content = {
    it: {
      role: "Senior Cloud & DevOps Engineer | CKAD",
      location: "📍 Taranto, Italia",
      langInfo: "🇮🇹 Italiano (Madrelingua) | 🇬🇧 Inglese (B2)",
      expTitle: "Esperienza Professionale",
      skillsTitle: "Competenze Tecniche",
      certTitle: "Certificazioni & Formazione",
      eduTitle: "Formazione Accademica",
      currentRole: "Cloud Engineer",
      msc: "M.Sc. Sicurezza Informatica",
      bsc: "B.Sc. Informatica e Com. Digitale",
      uni: "Università di Bari",
    },
    en: {
      role: "Senior Cloud & DevOps Engineer | CKAD",
      location: "📍 Taranto, Italy",
      langInfo: "🇮🇹 Italian (Native) | 🇬🇧 English (B2)",
      expTitle: "Professional Experience",
      skillsTitle: "Technical Skills",
      certTitle: "Certifications & Education",
      eduTitle: "Academic Education",
      currentRole: "Cloud Engineer",
      msc: "M.Sc. Cyber Security",
      bsc: "B.Sc. Computer Science",
      uni: "University of Bari",
    }
  };

  const t = content[lang];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-zinc-100 transition-colors">

      {/* Header Ridimensionato e Animato */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-zinc-200 bg-white/70 backdrop-blur-md px-6 py-6 dark:border-zinc-800 dark:bg-zinc-900/70 sticky top-0 z-50 shadow-sm"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Ciro Scatigna</h1>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href="https://www.linkedin.com/in/ciro-scatigna-25a09946/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </motion.a>
              </div>
              <p className="mt-1 text-lg text-blue-600 dark:text-blue-400 font-medium">{t.role}</p>
              <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                <span>{t.location}</span>
                <span>{t.langInfo}</span>
              </div>
            </div>

            <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
              <button onClick={() => setLang("it")} className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${lang === "it" ? "bg-white dark:bg-zinc-700 shadow-sm" : "opacity-50"}`}>IT</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${lang === "en" ? "bg-white dark:bg-zinc-700 shadow-sm" : "opacity-50"}`}>EN</button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-16">

        {/* Esperienza Lavorativa */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-8">{t.expTitle}</h2>
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
            <div className="absolute left-[-5px] top-2 h-[12px] w-[12px] rounded-full bg-blue-600"></div>
            <h3 className="text-xl font-bold">{t.currentRole}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 text-zinc-700 dark:text-zinc-300 text-sm">
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Container & K8s:</strong> Rancher, OKD (OpenShift), AKS.</li>
                <li><strong>Modern Web Stack:</strong> Node.js, TypeScript (TSX).</li>
                <li><strong>Serverless & SaaS:</strong> Supabase, Netlify.</li>
                <li><strong>Cyber Security & WAF:</strong> WAF Admin, Log analysis & Threat detection.</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>AI Automation:</strong> Python & Azure AI integration.</li>
                <li><strong>GitLab Admin:</strong> Enterprise Instance & Runner HA.</li>
                <li><strong>Observability:</strong> Prometheus, Grafana, Zabbix.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Competenze Tecniche */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-blue-600 flex items-center gap-2"><span>⚙️</span> Automation & Dev</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'TypeScript', 'Python', 'GitLab Admin', 'Netlify', 'Supabase', 'Java', 'Maven'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2"><span>🛡️</span> Security & Networking</h3>
            <div className="flex flex-wrap gap-2">
              {['WAF Specialist', 'Log Analysis', 'Hardening Linux', 'Nginx', 'Traefik', 'SSL/TLS', 'OWASP'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-md bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 text-sm font-medium">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-emerald-600 flex items-center gap-2"><span>☁️</span> Cloud & Monitoring</h3>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'AKS', 'OKD', 'Rancher', 'Azure', 'Docker Swarm', 'Helm', 'Prometheus', 'Grafana', 'Zabbix'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 text-sm font-medium">{skill}</span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Certificazioni */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-8">{t.certTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <motion.a whileHover={{ y: -5 }} href="https://www.credly.com/badges/5e888d67-980c-48d2-8aea-d7bb0f3ef1fe" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-xl font-bold">K8s</div>
                <div>
                  <h4 className="font-bold group-hover:text-blue-600 transition-colors">CKAD</h4>
                  <p className="text-xs text-zinc-500 font-medium uppercase italic leading-tight">Certified Kubernetes Application Developer</p>
                </div>
              </div>
            </motion.a>

            <motion.a whileHover={{ y: -5 }} href="https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=161DE0A3-75A1-42A2-9FB3-162F23ABDD2B&ts=394435843" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-xl font-bold">DX</div>
                <div>
                  <h4 className="font-bold group-hover:text-emerald-600 transition-colors">DevOps Pro</h4>
                  <p className="text-xs text-zinc-500 font-medium uppercase italic leading-tight">EXIN DevOps Professional</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Formazione Accademica */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 p-6 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
              <h4 className="text-lg font-bold">{t.msc}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{t.uni} • 103/110</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 p-6 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
              <h4 className="text-lg font-bold">{t.bsc}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{t.uni} • 102/110</p>
            </motion.div>
          </div>
        </motion.section>

        <footer className="text-center text-xs text-zinc-500 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <p>© {new Date().getFullYear()} Ciro Scatigna • LinkedIn: <a href="https://www.linkedin.com/in/ciro-scatigna-25a09946/" className="underline">ciro-scatigna</a></p>
        </footer>
      </main>
    </div>
  );
}