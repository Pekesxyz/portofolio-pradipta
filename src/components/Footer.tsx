
import { Github, Linkedin, Instagram } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          © {currentYear} Pradipta. Dibuat dengan Next.js & TypeScript.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Pekesxyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradiptazulva/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/pekssv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-secondary hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
