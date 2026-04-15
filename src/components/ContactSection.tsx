import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Github, ExternalLink, Copy, Check, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_he4qr6e";
const TEMPLATE_ID = "template_m7ayfpr";
const PUBLIC_KEY = "I5y6qNJaD15xFM_vH";

const links = [
  { icon: Mail, label: "Email", href: "mailto:jijnashkumar@gmail.com", display: "jijnashkumar@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jijnash-kumar-mukka/", display: "jijnash-kumar-mukka" },
  { icon: Github, label: "GitHub", href: "https://github.com/Jijnash2636", display: "Jijnash2636" },
  { icon: ExternalLink, label: "LeetCode", href: "https://leetcode.com/u/Jijnash2636/", display: "Jijnash2636" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("jijnashkumar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setSending(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setSending(false);
      setError("Failed to send message. Please try again or email directly.");
      console.error("EmailJS Error:", err);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 pb-12">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Contact Me
          </h2>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
            Open for Research Collaborations & Internships
          </div>
          
          <p className="text-gray-600 mb-8 max-w-lg text-sm">
            Whether you're interested in research collaboration, internships, or discussing AI in healthcare, feel free to reach out.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
              </div>
              <textarea placeholder="Your Message (research inquiry, collaboration idea, etc.)..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none" />
              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              <button type="submit" disabled={sending} className="w-full py-3.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 card-hover disabled:opacity-70">
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              <div className="text-center text-xs text-gray-500">Usually responds within 24 hours</div>
            </form>

            <div className="space-y-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <l.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{l.label}</div>
                    <div className="text-sm font-medium text-gray-900 mono">{l.display}</div>
                  </div>
                </a>
              ))}
              
              <button onClick={copyEmail} className="w-full flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-100 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Mail className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Quick Copy Email</div>
                    <div className="text-sm font-medium text-gray-900 mono">jijnashkumar@gmail.com</div>
                  </div>
                </div>
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
              </button>


            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400 mono">
          © <span id="year">{new Date().getFullYear()}</span> Mukka Jijnash Kumar · Actively seeking research collaborations & graduate opportunities
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
