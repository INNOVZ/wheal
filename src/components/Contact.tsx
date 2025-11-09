import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        preferredDate: date ? format(date, "PPP") : "Not specified",
        submittedAt: new Date().toISOString(),
      };

      // Send email automatically in the background
      await sendEmailAutomatically(submissionData);

      // Success feedback
      toast.success("Consultation request sent successfully!", {
        description:
          "Your message has been sent directly to jithinkjacob@live.com. We'll get back to you within 24 hours.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setDate(undefined);
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error("Failed to send consultation request", {
        description:
          "Please try again or contact us directly at jithinkjacob@live.com",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Send email automatically using multiple reliable services
  const sendEmailAutomatically = async (data: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    preferredDate: string;
    submittedAt: string;
  }) => {
    // Try Formspree first (most reliable)
    try {
      const response = await fetch("https://formspree.io/f/xpzgkqko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          preferredDate: data.preferredDate,
          message: data.message || "No additional message provided",
          submittedAt: new Date(data.submittedAt).toLocaleString(),
          _replyto: data.email,
          _subject: `New Consultation Request from ${data.fullName}`,
        }),
      });

      if (response.ok) {
        return await response.json();
      }
      throw new Error("Formspree failed");
    } catch (error) {
      console.log("Formspree failed, trying Web3Forms...", error);
    }

    // Try Web3Forms as backup
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c9e03ac8-7bb5-4c61-9c44-6d6e0d6f7e8f", // Free Web3Forms key
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          preferred_date: data.preferredDate,
          message: data.message || "No additional message provided",
          submitted_at: new Date(data.submittedAt).toLocaleString(),
          subject: `New Consultation Request from ${data.fullName}`,
          from_name: data.fullName,
          to_email: "jithinkjacob@live.com",
        }),
      });

      if (response.ok) {
        return await response.json();
      }
      throw new Error("Web3Forms failed");
    } catch (error) {
      console.log("Web3Forms failed, trying Netlify...", error);
    }

    // Try Netlify Forms as final backup
    try {
      const formData = new FormData();
      formData.append("form-name", "contact");
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("preferredDate", data.preferredDate);
      formData.append(
        "message",
        data.message || "No additional message provided"
      );
      formData.append(
        "submittedAt",
        new Date(data.submittedAt).toLocaleString()
      );

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        return { success: true, service: "netlify" };
      }
      throw new Error("All services failed");
    } catch (error) {
      throw new Error(
        "Unable to send email. All services are currently unavailable."
      );
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "393391282519"; // WhatsApp number without + and spaces
    const message = encodeURIComponent(
      "Hi! I'm interested in booking a consultation for healing and hypnosis services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your free discovery call today and begin your transformation
            journey
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection
            animation="scale-in"
            delay={200}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Book Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-border/50 hover:border-primary",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about what you're seeking help with..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Consultation Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Quick Connect & Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Quick Connect */}
            <AnimatedSection animation="slide-left" delay={400}>
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl border-0">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Quick Connect
                    </h3>
                    <p className="text-green-100 mb-6">
                      Get instant responses via WhatsApp
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      variant="secondary"
                      size="lg"
                      className="w-full bg-white text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all group"
                    >
                      <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      Message on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
