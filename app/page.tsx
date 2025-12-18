"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"it" | "en">("it");

  const content = {
    it: {
      role: "Senior Cloud & DevOps Engineer | CKAD",
      location: "📍 Taranto, Italia",
      langInfo: "🇮🇹 ITA | 🇬🇧 ENG (B2)",
      expTitle: "Esperienza Professionale",
      skillsTitle: "Competenze Tecniche",
      certTitle: "Certificazioni Professionali",
      eduTitle: "Percorso Accademico",
      currentRole: "Cloud Engineer",
      msc: "Laurea Magistrale in Sicurezza Informatica",
      bsc: "Laurea Triennale in Informatica e Com. Digitale",
      uni: "Università degli Studi di Bari Aldo Moro",
      grade: "Voto",
      viewBadge: "Visualizza Badge"
    },
    en: {
      role: "Senior Cloud & DevOps Engineer | CKAD",
      location: "📍 Taranto, Italy",
      langInfo: "🇮🇹 ITA | 🇬🇧 ENG (B2)",
      expTitle: "Professional Experience",
      skillsTitle: "Technical Skills",
      certTitle: "Professional Certifications",
      eduTitle: "Education",
      currentRole: "Cloud Engineer",
      msc: "M.Sc. in Cyber Security",
      bsc: "B.Sc. in Computer Science and Digital Communication",
      uni: "University of Bari Aldo Moro",
      grade: "Grade",
      viewBadge: "View Badge"
    }
  };

  const t = content[lang];

  // Varianti Animazione
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-zinc-100 transition-colors">

      {/* Header con Blur e Animazione */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-zinc-200 bg-white/70 backdrop-blur-md px-6 py-8 dark:border-zinc-800 dark:bg-zinc-900/70 sticky top-0 z-50 shadow-sm"
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
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">{t.role}</p>
              <div className="mt-2 flex justify-center md:justify-start gap-5 text-xs uppercase font-bold tracking-widest text-zinc-500">
                <span>{t.location}</span>
                <span>{t.langInfo}</span>
              </div>
            </div>

            <div className="flex gap-1 bg-zinc-200/50 dark:bg-zinc-800 p-1.5 rounded-lg">
              <button onClick={() => setLang("it")} className={`px-3 py-1 rounded text-sm font-bold transition-all ${lang === "it" ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600" : "opacity-50"}`}>IT</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 rounded text-sm font-bold transition-all ${lang === "en" ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600" : "opacity-50"}`}>EN</button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto max-w-4xl px-6 py-16 space-y-20">

        {/* Esperienza */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-bold border-l-4 border-blue-600 pl-4 mb-10 uppercase tracking-[0.2em] text-zinc-400">{t.expTitle}</h2>
          <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute left-[-7px] top-2 h-[12px] w-[12px] rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            ></motion.div>
            <h3 className="text-2xl font-bold">{t.currentRole}</h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2 text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              <ul className="space-y-3 list-disc ml-5">
                <li><strong>Cloud & K8s:</strong> Rancher, OKD (OpenShift), AKS.</li>
                <li><strong>Modern Web Stack:</strong> Node.js, TypeScript (TSX).</li>
                <li><strong>Serverless & SaaS:</strong> Supabase, Netlify.</li>
                <li><strong>Cyber Security & WAF:</strong> WAF Admin, Log analysis.</li>
              </ul>
              <ul className="space-y-3 list-disc ml-5">
                <li><strong>AI Automation:</strong> Python & Azure AI integration.</li>
                <li><strong>GitLab Admin:</strong> Enterprise HA & Runner management.</li>
                <li><strong>Observability:</strong> Prometheus, Grafana, Zabbix.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Competenze Tecniche */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:border-blue-500 transition-colors">
            <h3 className="font-bold text-lg mb-5 text-blue-600 flex items-center gap-3"><span>⚙️</span> Automation & Dev</h3>
            <div className="flex flex-wrap gap-2.5">
              {['Node.js', 'TypeScript', 'Python', 'GitLab Admin', 'Netlify', 'Supabase', 'Java', 'Maven'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:border-red-500 transition-colors">
            <h3 className="font-bold text-lg mb-5 text-red-600 flex items-center gap-3"><span>🛡️</span> Security & Networking</h3>
            <div className="flex flex-wrap gap-2.5">
              {['WAF Specialist', 'Log Analysis', 'Hardening Linux', 'Nginx', 'Traefik', 'SSL/TLS', 'OWASP'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm md:col-span-2 hover:border-emerald-500 transition-colors">
            <h3 className="font-bold text-lg mb-5 text-emerald-600 flex items-center gap-3"><span>☁️</span> Cloud & Monitoring</h3>
            <div className="flex flex-wrap gap-2.5">
              {['Kubernetes', 'AKS', 'OKD', 'Rancher', 'Azure', 'Docker Swarm', 'Helm', 'Prometheus', 'Grafana', 'Zabbix'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Certificazioni */}
        <section>
          <h2 className="text-sm font-bold border-l-4 border-blue-600 pl-4 mb-10 uppercase tracking-[0.2em] text-zinc-400">{t.certTitle}</h2>
          <div className="grid gap-8">
            {[
              { id: 'CKAD', name: 'Certified Kubernetes Application Developer', issuer: 'CNCF', color: 'blue', link: 'https://www.credly.com/badges/5e888d67-980c-48d2-8aea-d7bb0f3ef1fe' },
              { id: 'DX', name: 'EXIN DevOps Professional', issuer: 'EXIN', color: 'emerald', link: 'https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=161DE0A3-75A1-42A2-9FB3-162F23ABDD2B&ts=394435843' }
            ].map((cert) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm transition-all hover:border-blue-500"
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl font-bold text-xl bg-${cert.color}-100 dark:bg-${cert.color}-900/30 text-${cert.color}-600 shadow-inner`}>
                  {cert.id}
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl leading-snug text-zinc-800 dark:text-zinc-200">{cert.name}</h4>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider font-semibold">{cert.issuer}</p>
                  <div className="mt-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-tighter">{t.viewBadge} →</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Formazione */}
        <section>
          <h2 className="text-sm font-bold border-l-4 border-blue-600 pl-4 mb-10 uppercase tracking-[0.2em] text-zinc-400">{t.eduTitle}</h2>
          <div className="grid gap-8">
            {[
              { title: t.msc, grade: "103/110", icon: "🎓" },
              { title: t.bsc, grade: "102/110", icon: "📜" }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 text-3xl border border-zinc-100 dark:border-zinc-700 shadow-inner">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl leading-snug text-zinc-800 dark:text-zinc-200">{edu.title}</h4>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1">{t.uni}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">{t.grade}: {edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="text-center text-xs text-zinc-500 pt-12 border-t border-zinc-200 dark:border-zinc-800 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Ciro Scatigna • Cloud Engineering Portfolio</p>
        </footer>
      </main>
    </div>
  );
}