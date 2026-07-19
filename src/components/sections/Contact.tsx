import { useState } from "react";
import { Send, Mail, Linkedin, MapPin, Clock3 } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "andy@example.com",
    href: "mailto:andy@example.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/andy-anim",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
    href: "#hero",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const MAX_MESSAGE_LENGTH = 500;
  const { ref, isInView } = useInView();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessageLength(value.length);
    }
  }

  return (
    <section id="contact" className="bg-muted/30 px-6 py-24">
      <div ref={ref} className={`mx-auto max-w-2xl ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-sm text-muted-foreground">
              available for new projects
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether it is a product idea, a student-focused platform, or a finance initiative, I am always open to conversations with people building real impact.
          </p>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {contactMethods.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
              </a>
            );
          })}
        </div>

        <Card>
          <CardContent>
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-foreground">
                  Thank you for reaching out!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Kwame Mensah"
                    required
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  placeholder="Project collaboration"
                  required
                />
                <div className="w-full">
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <span className="text-sm text-muted-foreground">
                      {messageLength}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    onChange={handleMessageChange}
                    maxLength={MAX_MESSAGE_LENGTH}
                  />
                </div>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg">
                    Send message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 size={16} className="text-primary" />
                    <span className="font-mono">usually replies within 1-2 days</span>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
