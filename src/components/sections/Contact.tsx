import { useState } from "react";
import { Send } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const MAX_MESSAGE_LENGTH = 500;

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
      <div className="mx-auto max-w-2xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-muted-foreground font-mono">
              available for new projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-muted-foreground">
            Got a project, a collaboration, or just an idea worth talking
            through? Send a message and I&apos;ll get back to you.
          </p>
        </div>

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
                  <div className="flex justify-between items-center mb-2">
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
                <div className="flex items-center justify-between pt-2">
                  <Button type="submit" size="lg">
                    Send message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground font-mono">
                    {">"} ready to send
                  </span>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
