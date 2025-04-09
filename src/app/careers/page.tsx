"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    timezone: "",
    availability: "",
    rate: "",
    linkedIn: "",
    interest: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      timezone: "",
      availability: "",
      rate: "",
      linkedIn: "",
      interest: ""
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-36 md:pt-40 pb-20">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
            Careers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Work with the best of the best on cutting edge Gen AI problems.
          </p>

          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/2798198430/25061986.jpeg"
              alt="Team working together"
              width={1200}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Rest of the component stays the same */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The benefits of working at Agenix
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                Enjoy a fully remote, flexible work environment with hours to suit your life, competitive pay, and opportunities to grow with Agenix
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Open Positions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary">AI Engineer</h3>
              <p className="text-lg text-gray-400">Remote / Contract</p>
            </div>

            <div className="space-y-6">
              <p>
                We are seeking a remote AI Engineer to join our team on a contract basis. This role is crucial in delivering innovative AI solutions to our diverse client base.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-2">Core Responsibilities:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Design and build custom generative AI solutions</li>
                  <li>Conduct technical assessments and create proof-of-concepts</li>
                  <li>Optimize AI models for production environments, focusing on scalability and performance</li>
                  <li>Create detailed technical documentation for implementations</li>
                  <li>Collaborate with cross-functional teams to integrate AI capabilities into existing client systems</li>
                  <li>Conduct code reviews and mentor junior team members on AI best practices</li>
                  <li>Stay informed about emerging AI technologies and assess their potential for client applications</li>
                  <li>Contribute to the development of reusable AI components and internal tooling</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Required Skills:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Extensive experience with generative AI technologies and large language models</li>
                  <li>RAG systems development</li>
                  <li>Deep expertise in developing AI assistants / Agents and chatbots</li>
                  <li>Proficiency in Next.js and TypeScript</li>
                  <li>Experience with Python for AI/ML development</li>
                  <li>Strong understanding of AI evaluation methodologies and metrics</li>
                  <li>Up-to-date knowledge of advanced prompt engineering techniques</li>
                  <li>Solid understanding of web technologies and architectures (APIs, Webhooks, etc)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Bonus Skills:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>N8N / Make.com automation experience</li>
                  <li>React</li>
                  <li>AI Voice Agents</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Work Terms:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>20-40 hours weekly</li>
                  <li>Competitive hourly rate</li>
                  <li>Remote/flexible work</li>
                  <li>Opportunity for long-term growth at Agenix</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Apply Now</h2>
          <p className="text-center text-gray-300 mb-8">
            If you're passionate about AI and meet our requirements, we'd love to hear from you! Please fill out the form below explaining your interest and your contact information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="bg-secondary border-border"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@email.com"
                className="bg-secondary border-border"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="timezone" className="block text-sm font-medium mb-1">
                Timezone (of your physical location) *
              </label>
              <Input
                id="timezone"
                name="timezone"
                type="text"
                placeholder="(GMT) Western Europe Time, London, Lisbon"
                className="bg-secondary border-border"
                value={formData.timezone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium mb-1">
                Availability (hours per week) *
              </label>
              <Input
                id="availability"
                name="availability"
                type="text"
                placeholder="30"
                className="bg-secondary border-border"
                value={formData.availability}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="rate" className="block text-sm font-medium mb-1">
                Desired Rate ($USD/hr) *
              </label>
              <Input
                id="rate"
                name="rate"
                type="text"
                placeholder="0"
                className="bg-secondary border-border"
                value={formData.rate}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="linkedIn" className="block text-sm font-medium mb-1">
                LinkedIn URL (If not available put link to portfolio / website)
              </label>
              <Input
                id="linkedIn"
                name="linkedIn"
                type="text"
                placeholder="https://"
                className="bg-secondary border-border"
                value={formData.linkedIn}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-1">
                Explain your interest in this position *
              </label>
              <Textarea
                id="interest"
                name="interest"
                placeholder="Tell us why you're interested in this position..."
                className="min-h-24 bg-secondary border-border"
                value={formData.interest}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
