import { useInView } from "@/hooks/useInView";

const galleryItems = [
  {
    title: "Campus Leadership",
    image: "/images/gallery/campus-leadership.jpg",
    initials: "CL",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Project Builder",
    image: "/images/gallery/project-builder.jpg",
    initials: "PB",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    title: "EdTech Founder",
    image: "/images/gallery/edtech-founder.jpg",
    initials: "EF",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Tourism Strategy",
    image: "/images/gallery/tourism-strategy.jpg",
    initials: "TS",
    gradient: "from-amber-600 to-amber-800",
  },
];

export default function EditorialGallery() {
  const { ref, isInView } = useInView();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Editorial Gallery
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Professional contexts across education technology, hospitality
            strategy, campus leadership, and project delivery.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${isInView ? "stagger-children" : ""}`}
        >
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl"
            >
              <div
                className={`relative aspect-[3/4] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="relative text-4xl font-bold text-white/30 select-none">
                  {item.initials}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
