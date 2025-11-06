import React from "react";

function Contact() {
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
                You are welcome to contact us regarding consultation, investigation and analysis. We are happy to help!
              </p>

              <ul className="mt-8 space-y-2">
                <li>
                  <span className="font-semibold">Email us:</span>{" "}
                  <a href="mailto:info@example.com" className="underline hover:text-[#3daf36]">
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
                <form className="space-y-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="John Doe"
                      className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-address" className="block text-sm text-white mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      placeholder="johndoe@example.com"
                      className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message..."
                      className="w-full h-40 md:h-48 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-md px-5 py-3 focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--accent-green)] text-[var(--accent-beige)] font-medium py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3e883a] hover:scale-[1.03] transition-all focus:ring-2 focus:ring-[var(--accent-green)] focus:ring-offset-2"
                  >
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Contact;
