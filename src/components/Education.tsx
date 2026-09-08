"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-2">
              05 / Pendidikan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latar Belakang Akademik
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 max-w-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 hover:border-border/80 transition-colors">
              <div className="p-4 bg-muted rounded-full text-foreground shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Universitas Gunadarma
                </h3>
                <p className="text-lg text-secondary mb-4">
                  Sistem Informasi • IPK: 3.95/4.00
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-secondary text-sm font-medium border border-border/50">
                  2023 — Sekarang
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 md:p-10 max-w-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 hover:border-border/80 transition-colors">
              <div className="p-4 bg-muted rounded-full text-foreground shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  SMK Negeri 7 Jakarta
                </h3>
                <p className="text-lg text-secondary mb-4">
                  Teknik Komputer Jaringan
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-secondary text-sm font-medium border border-border/50">
                  2019 — 2022
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
