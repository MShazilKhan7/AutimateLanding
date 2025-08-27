import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SectionHeader } from "@/components/ui/section-header";
import { InfoCard } from "@/components/ui/info-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with your preferred service like Formspree, Netlify Forms, etc.)
    try {
      // Example: mailto link or third-party service integration
      const mailtoLink = `mailto:contact@autimate.com?subject=New Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      
      // For demo purposes, just show success message
      setTimeout(() => {
        toast({
          title: "Thank you!",
          description: "We've received your message and will get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get Started Today"
          description="Join us in transforming autism care. Start your child's journey towards better communication and independence."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection
            direction="left"
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-soft-charcoal mb-6">Ready to Begin?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Parent/Guardian Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gentle-blue focus:ring-2 focus:ring-gentle-blue/20 outline-none transition-all duration-200"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-soft-charcoal mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gentle-blue focus:ring-2 focus:ring-gentle-blue/20 outline-none transition-all duration-200"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-soft-charcoal mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+92 XXX XXXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gentle-blue focus:ring-2 focus:ring-gentle-blue/20 outline-none transition-all duration-200"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-soft-charcoal mb-2">
                  Tell us about your child's needs
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Age, current challenges, previous therapy experience..."
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gentle-blue focus:ring-2 focus:ring-gentle-blue/20 outline-none transition-all duration-200"
                  data-testid="textarea-message"
                />
              </div>

              <GradientButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                testId="button-submit-contact"
                className="w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Start Free Consultation"}
              </GradientButton>
            </form>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.2}
            className="space-y-8"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt="Family in supportive healthcare environment"
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="img-family-healthcare"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <InfoCard
                icon={Mail}
                title="Email Us"
                content="contact@autimate.com"
                iconColor="text-gentle-blue"
              />

              <InfoCard
                icon={Phone}
                title="Call Us"
                content="+92 XXX XXXXXXX"
                iconColor="text-soft-teal"
              />

              <InfoCard
                icon={MapPin}
                title="Location"
                content="Karachi, Pakistan"
                iconColor="text-sage-green"
              />

              <InfoCard
                icon={Clock}
                title="Support Hours"
                content="24/7 AI Support"
                iconColor="text-warm-orange"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
