import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

export default function Request() {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sendError, setSendError] = useState("");
    const [requestQuote, setRequestQuote] = useState(false);

    // DINA EMAILJS ID:N
    const SERVICE_ID = "service_cvm9cxg";
    const TEMPLATE_ID_NOTIFICATION = "template_5sxhurz"; // INTERN TEMPLATE ID
    const TEMPLATE_ID_AUTOREPLY = "template_i4h979b"; // AUTO-REPLY TEMPLATE ID
    const PUBLIC_KEY = "58tAqlP9OzJ9iS-El"; // PUBLIC KEY

    const validateForm = (data) => {
        const errors = {};

        if (!data.name.trim()) errors.name = "Please enter your name.";
        if (!data.email.trim()) {
            errors.email = "Please enter your email.";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Please enter a valid email.";
        }
        if (!data.company.trim()) errors.company = "Company name is required.";
        if (!data.message.trim()) errors.message = "Message is required.";

        return errors;
    };

    const sendEmail = async (e) => { // Funktionen är nu async
        e.preventDefault();

        const formData = {
            name: form.current.name.value,
            email: form.current.email.value,
            phone: form.current.phone.value,
            company: form.current.company.value,
            orgNumber: form.current.orgNumber.value,
            country: form.current.country.value,
            inquiryType: form.current.inquiryType.value,
            message: form.current.message.value,
            requestQuote: requestQuote ? "Yes" : "No", 
        };

        const errors = validateForm(formData);
        setFormErrors(errors);
        setSendError("");

        if (Object.keys(errors).length > 0) return;

        setIsSubmitting(true);

        try {
            // 1. First send to internal template (Using sendForm with the form reference)
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID_NOTIFICATION, // <-- KORREKT ID
                form.current,
                PUBLIC_KEY
            );

            // 2. Send auto-reply to the user (Using send with the formData object)
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_AUTOREPLY, // <-- KORREKT ID
                formData,
                PUBLIC_KEY
            );

            // Both calls succeeded
            setIsSubmitting(false);
            setShowModal(true);
            form.current.reset();
            setRequestQuote(false);
            setFormErrors({});

        } catch (error) {
            // An error occurred in one of the steps
            console.error("Email sending failed:", error);
            setIsSubmitting(false);
            setSendError("Something went wrong — try again later. Check the console for details.");
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-accent-blue min-h-screen">

            {/* INTRO TEXT */}
            <div className="mb-8 sm:mb-10 text-center max-w-4xl mx-auto px-4 sm:px-6">

                {/* ICON + LABEL */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
                    <span className="text-accent-beige text-base sm:text-lg font-medium tracking-wide">
                        Contact & Request
                    </span>
                </div>

                {/* TITLE */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-green leading-tight px-4">
                    Request one of our services
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-accent-beige/90 leading-relaxed px-4">
                    Whether you're interested in a measurement campaign, technical
                    collaboration, research support, or a general inquiry. This form helps
                    us collect the details needed to follow up efficiently and tailor our
                    response to your needs.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-md space-y-4 sm:space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label className="text-white text-sm block mb-2">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                        />
                        {formErrors.name && (
                            <p className="text-red-400 text-xs sm:text-sm mt-1">{formErrors.name}</p>
                        )}
                    </div>

                    {/* Email + Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                        {/* Email */}
                        <div>
                            <label className="text-white text-sm block mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john.doe@example.com"
                                className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                            />
                            {formErrors.email && (
                                <p className="text-red-400 text-xs sm:text-sm mt-1">{formErrors.email}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                    
                        <div>
                            <label className="text-white text-sm block mb-2">
                                Phone Number (optional)
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+46 70 123 45 67"
                                className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Company + Org Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label className="text-white text-sm mb-2 block">Company Name *</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Alkion Technologies AB"
                                className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                            />
                            {formErrors.company && (
                                <p className="text-red-400 text-xs sm:text-sm mt-1">{formErrors.company}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-white text-sm mb-2 block">
                                Organization / VAT Number
                            </label>
                            <input
                                name="orgNumber"
                                placeholder="556123-4567 / SE12345678901"
                                className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="text-white text-sm block mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Sweden"
                            className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                        />
                    </div>

                    {/* Inquiry Type */}
                    <div className="relative">
                        <select
                            name="inquiryType"
                            defaultValue=""
                            className="w-full bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:bg-white/20 focus:border-accent-green transition appearance-none"
                        >
                            <option value="" disabled className="bg-accent-blue text-white">
                                Select an inquiry type
                            </option>
                            <option className="bg-accent-blue text-white">General Request</option>
                            <option className="bg-accent-blue text-white">Measurement Campaign</option>
                            <option className="bg-accent-blue text-white">Collaboration / R&D</option>
                            <option className="bg-accent-blue text-white">
                                Technical Support / Consulting
                            </option>
                        </select>

                        <span className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white opacity-60 text-xs sm:text-sm">
                            ▼
                        </span>
                    </div>

                    {/* Quote Request Toggle */}

                    <input type="hidden" name="requestQuote" value={requestQuote ? "Yes" : "No"} />


                    <div className="flex items-center gap-2 sm:gap-3">
                        <input
                            type="checkbox"
                            checked={requestQuote}
                            onChange={() => setRequestQuote(!requestQuote)}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded cursor-pointer accent-[var(--accent-green)]"
                        />
                        <span className="text-white text-sm sm:text-base">
                            Request a formal quotation
                        </span>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-white text-sm block mb-2">Message *</label>
                        <textarea
                            name="message"
                            className="w-full h-28 sm:h-32 bg-white/10 text-white border border-white/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
                        ></textarea>
                        {formErrors.message && (
                            <p className="text-red-400 text-xs sm:text-sm mt-1">{formErrors.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent-green text-accent-beige font-semibold py-3 sm:py-4 rounded-md hover:opacity-90 transition text-sm sm:text-base"
                    >
                        {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>

                    {sendError && (
                        <p className="text-red-400 text-center text-xs sm:text-sm">{sendError}</p>
                    )}
                </form>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
                    <div className="bg-white p-6 sm:p-8 rounded-lg text-center shadow-xl max-w-sm w-full">
                        <p className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">
                            Your request has been submitted successfully.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-6 py-2 bg-accent-green text-white rounded-md hover:opacity-90 text-sm sm:text-base"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}