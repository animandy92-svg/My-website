"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card, { CardContent } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? Drop me a message."
        />
        <Card>
          <CardContent>
            {submitted ? (
              <div className="py-8 text-center">
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
                    placeholder="Your name"
                    required
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  required
                />
                <TextArea
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project..."
                  required
                />
                <Button type="submit" size="lg" className="self-start">
                  Send Message
                  <Send className="ml-2 inline h-4 w-4" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
