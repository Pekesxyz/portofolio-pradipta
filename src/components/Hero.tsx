"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase mb-4 block">
            Mahasiswa Sistem Informasi
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Halo, Saya Pradipta Zulva Nur Hansyah.
          </h1>
          <p className="text-lg lg:text-xl text-secondary mb-10 max-w-xl text-balance leading-relaxed">
            Saya membangun aplikasi web dan solusi berbasis data dengan fokus pada kode yang bersih, fungsionalitas praktis, dan pengalaman pengguna yang nyaman.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#projects"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Lihat Karya Saya
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              Unduh CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 mt-8 lg:mt-10 w-full">
            <a
              href="https://github.com/Pekesxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pradiptazulva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/pekssv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full -z-10 blur-3xl"></div>
          <div className="w-full h-full rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center relative shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Pradipta Zulva"
              fill
              className="object-cover"
              style={{ 
                objectPosition: "center 25%", 
                transform: "scale(1.05) translateX(-2.5%)" 
              }}
              priority
            />
          </div>
          {/* Subtle decorative pattern */}
          <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle_at_center,_var(--color-border)_2px,_transparent_2px)] [background-size:12px_12px] -z-20 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
