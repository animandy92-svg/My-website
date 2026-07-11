import {
  Code,
  Lightbulb,
  Users,
  GraduationCap,
  Languages,
  Briefcase,
  Award,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";

const highlights = [
  {
    icon: Code,
    title: "Analytical Skills",
    description:
      "Strong Excel-based analytical skills from Financial Accounting, Business Statistics, and Corporate Finance.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Finding elegant solutions to complex technical and business challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams and clients to deliver results across distributed environments.",
  },
];

const skills = [
  "Microsoft Excel & Office Suite",
  "Financial Record-Keeping & Bookkeeping",
  "Business Statistics & Data Analysis",
  "Research Coordination",
  "Budget & Cash-Flow Management",
  "Adobe Photoshop",
  "Team Leadership & Communication",
];

const experience = [
  {
    role: "Research Coordinator & Co-Developer",
    company: "AZ Learner",
    period: "Jun 2026 - Present",
    description:
      "Coordinate research initiatives across 5+ departments, gathering, organizing, and analyzing data to inform product and business decisions. Co-develop platform features, manage a team of 12 researchers, and deliver insights that drive user growth to 10K+ active students.",
  },
  {
    role: "Chief of Ambassadors (HR Coordination)",
    company: "AZ Learner",
    period: "Jan 2026 - May 2026",
    description:
      "Recruited, onboarded, and managed a team of 20+ brand ambassadors across multiple Ghanaian campuses. Tracked performance metrics, increased campus outreach by 40%, and reported outcomes directly to leadership.",
  },
  {
    role: "Founder & CEO",
    company: "Jack of All Trade iStore",
    period: "2024 - Present",
    description:
      "Founded and scaled an online retail business serving 500+ customers, trading phones, laptops, and accessories. Oversee pricing strategy, inventory management, and cash-flow operations with a Firebase-powered marketplace.",
  },
  {
    role: "Co-Developer",
    company: "Project Kasena (Indigen World)",
    period: "2026",
    description:
      "Co-developed a community-driven digital Kasem dictionary targeting 20,000+ validated entries. Designed micro-payment verification system (GHS 0.50/phrase), coordinated youth contributors and elder validators, and formed a 90-day strategic alliance with Indigen World for Northern Ghana.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="About Me"
          subtitle="Detail-oriented accounting student combining analytical skills with real-world business experience."
        />

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} hover>
              <CardContent className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardContent>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-light shadow-lg">
                <img
                  src="/images/profile/profile.png"
                  alt="Francis Anim"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/90 select-none">
                  FA
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  Francis Anim
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  BCom Accounting Student &amp; Entrepreneur
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Detail-oriented Bachelor of Commerce (Accounting) student at
                  the University of Cape Coast, combining strong Excel-based
                  analytical skills from coursework in Financial Accounting,
                  Business Statistics, and Corporate Finance with real-world
                  experience in research coordination, business operations, and
                  entrepreneurship. Proven track record managing budgets,
                  records, and cross-functional teams; seeking an accounting or
                  finance internship to apply a rigorous, numbers-driven
                  approach in a professional environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              <p className="font-semibold text-foreground">BCom, Accounting</p>
              <p className="text-sm text-muted-foreground">
                University of Cape Coast
              </p>
              <p className="text-sm text-muted-foreground">
                Nov 2023 - Jul 2027 (Expected)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Languages size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Languages</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">English</span>
                  <span className="text-sm text-muted-foreground">Fluent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Akan</span>
                  <span className="text-sm text-muted-foreground">Fluent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{job.role}</p>
                      <p className="text-sm text-primary">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Leadership & Activities
              </h3>
            </div>
            <p className="font-semibold text-foreground">
              Cadet Second in Command - Oguaa Hall
            </p>
            <p className="text-sm text-primary">
              University of Cape Coast
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Held a command position within the hall's cadet corps, developing
              discipline, coordination, and team-management skills.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Card>
            <CardContent>
              <h3 className="mb-4 text-xl font-bold text-foreground">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
