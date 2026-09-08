"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border/50 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-4">
            06 / Kontak
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Mari Terhubung
          </h2>
          <p className="text-lg text-secondary mb-12 text-balance leading-relaxed">
            Saat ini saya terbuka untuk kesempatan magang serta peluang untuk belajar, membangun, dan berkontribusi. Jangan ragu untuk menghubungi saya!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pradiptasamsung@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              <Mail className="w-5 h-5" />
              Kirim Pesan
            </a>
            
            <a
              href="https://www.linkedin.com/in/pradiptazulva/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-card text-foreground border border-border px-8 py-4 rounded-md font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
              Terhubung di LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pradiptasamsung@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">pradiptasamsung@gmail.com</span>
            </a>
            <a
              href="https://github.com/Pekesxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/pekssv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
