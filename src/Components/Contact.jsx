import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <section className="relative min-h-screen">
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
        
        <div className="container mx-auto flex flex-1 flex-col px-6 py-12">

          <div className="-mx-6 flex-1 lg:flex lg:items-center">

            {/* Left column */}
            <div className="text-white lg:mx-6 lg:w-1/2 p-10 ">
              <h1 className="text-2xl text-white font-semibold capitalize lg:text-4xl">
                Get in touch with us
              </h1>

              <p className="mt-2 max-w-xl">
                You are welcome to contact us regarding consultation,
                investigation and analysis. We are happy to help!
              </p>

              <ul className="mt-8 space-y-2">
                <li>
                  <span className="font-semibold">Email us:</span>{" "}
                  <a
                    href="mailto:info@alkiontech.com"
                    className="underline hover:text-[#3daf36]"
                  >
                    info@alkiontech.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Our location:</span>{" "}
                  <span>Gothenburg, Sweden</span>
                </li>
              </ul>
            </div>

            {/* Right column / Form */}
            <div className="lg:w-[40%] w-full">
              <div className="bg-accent-beige/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-2xl p-8 sm:p-10">
                <form
                  ref={form}
                  className="space-y-6"
                  onSubmit={sendEmail}
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all"
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
                      className="block text-sm text-white mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      placeholder="johndoe@example.com"
                      className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all"
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
                      className="block text-sm text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message..."
                      className="w-full h-40 md:h-48 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all resize-none"
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent-green)] text-[var(--accent-beige)] font-medium py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3e883a] hover:scale-[1.03] transition-all focus:ring-2 focus:ring-[var(--accent-green)] focus:ring-offset-2"
                  >
                    {isSubmitting ? "Sending..." : "Get in touch"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center max-w-xs mx-auto">
            <p className="mb-4 font-semibold text-gray-800">
              Thank you for your mail!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
