import React from "react";

function Footer() {
    return (
        <footer className="bg-slate-900 text-[var(--accent-beige)] py-4 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-center sm:text-left">

                {/* Left side — company info */}
                <div className="space-y-1">
                    <p className="font-medium text-white/90">© 2025 Alkion Technologies AB</p>
                    <p className="text-white/70">
                        Org.nr: <span className="font-medium">5595496695</span>
                    </p>
                </div>

                {/* Center — contact info */}
                <div className="space-y-1">
                    <p>
                        <a
                            href="mailto:info@alkiontech.com"
                            className="hover:text-[var(--accent-green)] transition-colors"
                        >
                            info@alkiontech.com
                        </a>
                    </p>
                    <p className="text-white/70">Gothenburg, Sweden</p>
                </div>

                {/* Right side — credit */}
                <div className="text-white/60 text-xs sm:text-sm">
                    Website design & development by{" "}
                    <a
                        href="https://www.sannawiklund.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-green)] font-medium hover:underline transition-colors"
                    >
                        Sanna Wiklund
                    </a>{" "}
                    © 2025
                </div>
            </div>
        </footer>
    );
}

export default Footer;
