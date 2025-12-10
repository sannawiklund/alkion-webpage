import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";


function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendError, setSendError] = useState('');


  // Valideringsfunktion
  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Please enter your name.";
    if (!data.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!data.message.trim()) errors.message = "Please enter a message.";
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    const errors = validateForm(formData);
    setFormErrors(errors);
    setSendError('');

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    // First - Send email to Alkion Technologies
    emailjs
      .sendForm(
        "service_cvm9cxg", // Service ID
        "template_5sxhurz", // Template ID for notification to Alkion Technologies
        form.current,
        "58tAqlP9OzJ9iS-El" // Public Key
      )
      .then(() => {
        // Then - Auto-Reply to sender
        return emailjs.send(
          "service_cvm9cxg",
          "template_i4h979b", // Template ID for auto-reply to sender
          formData,
          "58tAqlP9OzJ9iS-El"
        );
      })
      .then(() => {
        setIsSubmitting(false);
        setShowModal(true);
        form.current.reset();
        setFormErrors({});
        setSendError('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
        setSendError('Oops, something went wrong. Please try again later.');
      });
  };

  return (
    <section className="relative min-h-screen" id="contactForm">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        <div className="container mx-auto flex flex-1 flex-col px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">

          <div className="flex-1 lg:flex lg:items-center lg:gap-8">

            {/* Left column */}
            <div className="text-accent-beige lg:w-1/2 p-4 sm:p-6 lg:p-10 space-y-4 sm:space-y-6 mb-6 lg:mb-0">

              {/* ICON*/}
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-accent-green" />

              <div className="flex items-center">

                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Contact Information
                </span>

              </div>

              <p className="text-base sm:text-lg text-accent-beige italic">
                Based in Gothenburg — Active across the globe
              </p>

              <div className="space-y-3 sm:space-y-4 text-accent-beige/90 text-sm sm:text-md leading-relaxed">
                <p>
                  <strong>General inquiries:</strong><br />
                  <a className="text-accent-green hover:underline break-all" href="mailto:info@alkiontech.com">
                    info@alkiontech.com
                  </a>
                </p>
              
                <p>
                  <strong> Dan Gall - Sales & Corporate Affairs:</strong><br />
                  <a className="text-accent-green hover:underline break-all" href="mailto:dg@alkiontech.com">
                    dg@alkiontech.com
                  </a>{" "}
                </p>

                <p>
                  <strong>Viktor Andersson - Technical inquiries:</strong><br />
                  <a className="text-accent-green hover:underline break-all" href="mailto:va@alkiontech.com">
                    va@alkiontech.com
                  </a>{" "}
                </p>

                <p>
                  <strong>Xiangrui Kong - Research & Scientific Projects:</strong><br />
                  <a className="text-accent-green hover:underline break-all" href="mailto:xk@alkiontech.com">
                    xk@alkiontech.com
                  </a>{" "}
                
                </p>

              </div>

            </div>

            {/* Right column / Form */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-accent-beige/20 backdrop-blur-sm border border-accent-beige/30 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">
                <form
                  ref={form}
                  className="space-y-4 sm:space-y-6"
                  onSubmit={sendEmail}
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm text-accent-beige mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-accent-beige/10 text-accent-beige placeholder-accent-beige/50 border border-accent-beige/20 rounded-md px-4 py-2.5 sm:px-5 sm:py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all text-base"
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm text-accent-beige mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      placeholder="johndoe@example.com"
                      className="w-full bg-accent-beige/10 text-accent-beige placeholder-accent-beige/50 border border-accent-beige/20 rounded-md px-4 py-2.5 sm:px-5 sm:py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all text-base"
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-accent-beige mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message..."
                      className="w-full h-32 sm:h-40 md:h-48 bg-accent-beige/10 text-accent-beige placeholder-accent-beige/50 border border-accent-beige/20 rounded-md px-4 py-2.5 sm:px-5 sm:py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all resize-none text-base"
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {sendError && <p className="text-red-500 text-sm mb-2">{sendError}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent-green)] text-[var(--accent-beige)] font-medium py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3e883a] hover:scale-[1.03] transition-all focus:ring-2 focus:ring-[var(--accent-green)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    {isSubmitting ? "Sending..." : "Get in touch"}
                  </button>
                </form>
              </div>

            </div>

          </div>

          {/* --- MAP IMAGE --- */}
          <div className="mt-6 sm:mt-8 lg:mt-10 px-0 sm:px-6">
            <iframe
              title="AlkionTech Location"
              width="100%"
              height="250"
              className="rounded-lg shadow-lg border border-accent-beige/20 sm:h-[350px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79820.74408552777!2d11.748654!3d57.70157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77d2c4f7ebc7%3A0x400fef341e51c40!2sGothenburg!5e0!3m2!1sen!2sse!4v1733670000000"
            ></iframe>
          </div>

        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-accent-beige p-6 rounded shadow-lg text-center max-w-xs w-full mx-auto">
            <p className="mb-4 font-semibold text-gray-800">
              Thank you for your mail!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-500 text-accent-beige px-4 py-2 rounded hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
