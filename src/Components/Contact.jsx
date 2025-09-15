import React from "react";

function Contact() {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="flex min-h-screen flex-col bg-black/60">
        <div className="container mx-auto flex flex-1 flex-col px-6 py-12">
          <div className="-mx-6 flex-1 lg:flex lg:items-center">
            
            {/* Left column */}
            <div className="text-white lg:mx-6 lg:w-1/2 p-10 ">
              <h1 className="text-2xl font-semibold capitalize lg:text-4xl">
                Get in touch with us
              </h1>

              <p className="mt-2 max-w-xl">
                You are welcome to contact us regarding consultation, investigation and analysis. We are happy to help!
              </p>

              <ul className="mt-8 space-y-2">
                <li>
                  <span className="font-semibold">Email us:</span>{" "}
                  <a href="mailto:info@example.com" className="underline hover:text-blue-300">
                    info@alkiontechnologies.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Our location:</span>{" "}
                  <span>1234 Main Street, Gothenburg, Sweden</span>
                </li>
              </ul>
            </div>

            {/* Right column / Contact-form */}
            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div className="w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:mx-auto lg:max-w-xl">
                <form className="mt-6">
                  <div className="flex-1">
                    <label
                      className="mb-2 block text-sm text-gray-200"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      id="full-name"
                      className="focus:ring-blue-300 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label
                      className="mb-2 block text-sm text-gray-200"
                      htmlFor="email-address"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      id="email-address"
                      className="focus:border-blue-300 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                    />
                  </div>

                  <div className="mt-6 w-full">
                    <label
                      className="mb-2 block text-sm text-gray-200"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="focus:ring-blue-300 dark:focus:border-blue-300 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 md:h-48 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="focus:ring-blue-400 mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-opacity-50">
                    get in touch
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