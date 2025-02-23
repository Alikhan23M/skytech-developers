'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import GenralHero from "@/components/GenralHero";
import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({ Fname: '', Sname: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);  // New state for tracking sending status

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);  // Set sending state to true

    const formDataObject = new FormData();
    formDataObject.append('service_id', 'nexskyofficial@gmail.com');
    formDataObject.append('template_id', 'template_csav9no');
    formDataObject.append('user_id', 'yDwZwZ-kAczpTpQNw');
    formDataObject.append('from_name', `${formData.Fname} ${formData.Sname}`.trim());
    formDataObject.append('reply_to', formData.email);
    formDataObject.append('message', formData.message);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formDataObject,
      });

      if (response.ok) {
        setMessageSent(true);
        setErrorMessage('');
        setFormData({ Fname: '', Sname: '', email: '', message: '' });
        setTimeout(() => setMessageSent(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Oops... Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);  // Reset sending state
    }
  };
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}

      <GenralHero heading="Contact Us" para=" Have a project in mind? Let's discuss how we can help bring your vision to life." />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="px-4 sm:container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <input
                        name="Fname"
                        value={formData.Fname}
                        onChange={handleChange}
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <input
                        name="Sname"
                        value={formData.Sname}
                        onChange={handleChange}
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  {/* Status Messages */}
                  {isSending && <p className="text-sm text-blue-500 mt-2">Sending...</p>}
                  {messageSent && <p className="text-sm text-green-500 mt-2">Message sent successfully!</p>}
                  {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        Mardan KPK
                        <br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground hover:underline transition-colors duration-300 "><a className="whitespace-normal break-all" href="tel:+923429327224">+92 342 9327224</a></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground hover:underline transition-colors duration-300">
                        <a className="whitespace-normal break-all" href="mailto:skytechdevelopers.official@gmail.com">skytechdevelopers.official@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/skytech-developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/skytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/skytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}