"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-2">
              01 / Tentang
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mengenal Saya
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="prose prose-neutral dark:prose-invert max-w-none text-secondary">
              <p className="text-lg leading-relaxed mb-6">
                Saya adalah mahasiswa jurusan Sistem Informasi di Universitas Gunadarma dengan minat besar dalam perancangan dan pengembangan antarmuka web. Saya selalu antusias dalam belajar teknologi baru agar dapat mengikuti perkembangan zaman.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Melalui perjalanan akademik dan eksplorasi pribadi, saya telah menguasai dasar-dasar HTML, CSS, JavaScript, SQL, dan Figma. Saya sangat menikmati proses membangun antarmuka yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang baik.
              </p>
              <p className="text-lg leading-relaxed">
                Memiliki semangat belajar tinggi, kemampuan kerja tim yang baik, serta mahir mengoperasikan Microsoft Office, saya saat ini terbuka untuk peluang magang atau kolaborasi untuk terus berkembang sebagai UI/UX Designer & Web Developer.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-border/80 transition-colors">
                <div className="p-3 bg-muted rounded-lg text-foreground mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pendidikan</h3>
                  <p className="text-secondary">Universitas Gunadarma</p>
                  <p className="text-sm text-secondary/80">Sistem Informasi (IPK: 3.95)</p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-border/80 transition-colors">
                <div className="p-3 bg-muted rounded-lg text-foreground mt-1">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">UI/UX & Web Dev</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Merancang wireframe, purwarupa (prototype) di Figma, dan membangun antarmuka web yang interaktif.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-border/80 transition-colors">
                <div className="p-3 bg-muted rounded-lg text-foreground mt-1">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Data & Machine Learning</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Bekerja dengan basis data, visualisasi data, dan penerapan model machine learning untuk solusi praktis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
