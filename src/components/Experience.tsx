"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Entry Intern — Kelurahan Penggilingan",
    date: "April 2021 – Juli 2021",
    description: "Bertanggung jawab sebagai Data Entry di instansi pemerintahan Kelurahan Penggilingan. Bertugas dalam memasukkan, memvalidasi, dan mengelola data kependudukan serta memberikan layanan masyarakat dengan akurasi tinggi.",
  },
  {
    title: "Ketua Kelas 2KA25",
    date: "2024 – Sekarang",
    description: "Memimpin dan mengkoordinasikan kegiatan akademik serta non-akademik di kelas, menjadi jembatan komunikasi antara mahasiswa dan dosen, serta memastikan kelancaran administrasi perkuliahan.",
  },
  {
    title: "Seksi Perlengkapan — Karang Taruna",
    date: "2022 – 2023",
    description: "Bertanggung jawab atas pengelolaan, pengadaan, dan pemeliharaan perlengkapan serta logistik untuk berbagai kegiatan dan acara organisasi Karang Taruna.",
  },
  {
    title: "Juara 3 - UI/UX Competition",
    date: "2025",
    description: "Meraih juara ke-3 dalam kompetisi UI/UX. Merancang antarmuka aplikasi yang berfokus pada pengalaman pengguna yang intuitif, fungsional, dan desain yang modern.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30 scroll-mt-20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-2">
              04 / Pengalaman
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pengalaman & Aktivitas
            </h2>
          </div>

          <div className="max-w-3xl">
            <div className="space-y-12 border-l-2 border-border/60 pl-6 md:pl-8 ml-3 md:ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2 md:gap-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-accent whitespace-nowrap bg-accent/10 px-3 py-1 rounded-full w-fit">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
