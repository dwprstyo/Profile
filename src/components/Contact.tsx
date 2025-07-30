import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactFormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }),
  last_name: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  // Honeypot field: Bot akan mengisinya, pengguna tidak.
  // Aturan 'prohibited' memastikan field ini tidak ada atau kosong.
  confirm_email: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.confirm_email) {
      // Bot terdeteksi
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://myprofile-be.deecodesoftware.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      toast.error(errorMessage);
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <Toaster position="top-center" richColors />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work
            <br />
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start a new project? Let’s discuss your idea and bring your
            digital vision to life—together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 delay-300 transform ${
              infoVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">kuatdwipasetiyo@deecodesoftware.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+62 858 6959 1183</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`glass-card p-8 rounded-2xl transition-all duration-1000 delay-500 transform ${
              formVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          > 
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-white font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    id="first_name"
                    placeholder="John"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    {...register("first_name")}
                  />
                  {errors.first_name && <p className="text-red-400 text-sm mt-1">{errors.first_name.message}</p>}
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-white font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    id="last_name"
                    placeholder="Doe"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    {...register("last_name")}
                  />
                  {errors.last_name && <p className="text-red-400 text-sm mt-1">{errors.last_name.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Discussion"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  {...register("subject")}
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  {...register("message")}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="confirm_email">Please leave this field empty</label>
                <Input id="confirm_email" {...register("confirm_email")} autoComplete="off" tabIndex={-1} />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glow-effect disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
