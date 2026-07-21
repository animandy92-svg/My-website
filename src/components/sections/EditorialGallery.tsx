import { useInView } from "@/hooks/useInView";

const galleryItems = [
    {
    title: "Campus Leadership",
    image: "/images/gallery/IMG_0638.jpg",
    initials: "CL",
    gradient: "from-blue-600 to-blue-800",
    },
  {
    title: "Project Builder",
    image: "/images/gallery/89107bd9-f3ad-4e83-8f4f-a4d6eb47d87e.png",
    initials: "PB",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    title: "Financial Strategy",
    image: "/images/gallery/a473bafe-edf4-4e9d-b727-cf85ecf118d4.png",
    initials: "FS",
    gradient: "from-amber-600 to-amber-800",
  },
];

export default function EditorialGallery() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Editorial Gallery
            </h2>
            <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              A visual record of work, leadership, and strategic presence.
            </p>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Professional contexts across education technology, hospitality
            strategy, campus leadership, and project delivery.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ${isInView ? "stagger-children" : ""}`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index % 2 === 1 ? "lg:translate-y-6" : ""}`}
            >
              <div className={`relative aspect-[3/4] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 px-4 py-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Featured perspective
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
