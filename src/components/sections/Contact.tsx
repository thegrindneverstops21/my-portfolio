import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconCheck,
  IconAlertCircle,
} from '@tabler/icons-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Let's build something.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-xl">
            I'm actively looking for my first professional role. If you have
            a junior position, an internship, or just want to talk code,
            my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <div className="flex flex-col gap-6">

            {/* Links */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <IconMail size={18} />,
                  label: 'ndlovusamjunior21@gmail.com',
                  href: 'mailto:ndlovusamjunior21@gmail.com',
                },
                {
                  icon: <IconBrandGithub size={18} />,
                  label: 'github.com/thegrindneverstops21',
                  href: 'https://github.com/thegrindneverstops21',
                },
                {
                  icon: <IconBrandLinkedin size={18} />,
                  label: 'linkedin.com/in/sam-junior',
                  href: 'https://linkedin.com/in/sam-junior-10a13b319',
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 text-sm text-muted
                    hover:text-white border border-white/8
                    hover:border-accent/40 bg-surface
                    px-4 py-3.5 rounded-xl transition-all duration-200
                  "
                >
                  <span className="text-accent">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="
              bg-accent2/8 border border-accent2/20
              rounded-xl px-4 py-3.5
            ">
              <p className="text-sm text-accent2 font-medium">
                ⚡ Usually responds within 24 hours
              </p>
            </div>

            {/* Available badge */}
            <div className="
              bg-surface border border-white/8
              rounded-xl px-4 py-4
            ">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-accent2 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Available now
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Open to junior roles, internships, and contract work.
                Based in South Africa, remote friendly.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface border border-white/8 rounded-2xl p-7">
            <form ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="flex flex-col gap-4 mb-5">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="
                      w-full bg-surface2 border border-white/8
                      rounded-xl px-4 py-3 text-sm text-white
                      placeholder:text-muted/50 outline-none
                      focus:border-accent/50 transition-colors
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="
                      w-full bg-surface2 border border-white/8
                      rounded-xl px-4 py-3 text-sm text-white
                      placeholder:text-muted/50 outline-none
                      focus:border-accent/50 transition-colors
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className="
                      w-full bg-surface2 border border-white/8
                      rounded-xl px-4 py-3 text-sm text-white
                      placeholder:text-muted/50 outline-none
                      focus:border-accent/50 transition-colors
                      resize-none
                    "
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  w-full flex items-center justify-center gap-2
                  bg-accent hover:bg-accent/85 disabled:opacity-60
                  disabled:cursor-not-allowed text-white font-semibold
                  text-sm px-6 py-3.5 rounded-xl
                  transition-all duration-200
                "
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend size={16} />
                    Send message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="
                  mt-4 flex items-center gap-2 text-sm text-accent2
                  bg-accent2/8 border border-accent2/20
                  px-4 py-3 rounded-xl
                ">
                  <IconCheck size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="
                  mt-4 flex items-center gap-2 text-sm text-red-400
                  bg-red-400/8 border border-red-400/20
                  px-4 py-3 rounded-xl
                ">
                  <IconAlertCircle size={16} />
                  Something went wrong. Email me directly instead.
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}