export function QuickIntro() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-sm text-secondary font-medium block mb-1">
            Fokus eksplorasi saat ini
          </span>
          <p className="text-base md:text-lg font-medium text-foreground">
            Web Development <span className="text-accent mx-2">•</span> Data Science <span className="text-accent mx-2">•</span> UI/UX Design
          </p>
        </div>
        
        <div className="md:text-right w-full md:w-auto border-t md:border-t-0 border-border pt-4 md:pt-0">
          <span className="text-sm text-secondary font-medium block mb-1">
            Status Saat Ini
          </span>
          <p className="text-base font-medium text-foreground">
            Mahasiswa Sistem Informasi
          </p>
        </div>
      </div>
    </section>
  );
}
