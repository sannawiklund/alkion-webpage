// MegaNav.jsx
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronDown, Menu, X } from 'lucide-react';


const RenderSubLinks = ({ links, parentPath = '', navigate, closeMenu, isMobile = false, depth = 0 }) => {
    return (
        <ul className={isMobile ? "space-y-2" : depth === 0 ? "space-y-2" : "text-sm space-y-2"}>
            {links.map((link, idx) => {
                const isHeading = !link.hash && link.subLinks;
                const isTopLevel = depth === 0;
                const isNested = depth > 0;

                const handleClick = (e) => {
                    e.preventDefault();

                    if (!link.scrollTo) return;

                    navigate(parentPath, { state: { scrollTo: link.scrollTo } });

                    if (isMobile && closeMenu) closeMenu();
                };


                return (
                    <li key={idx}>
                        {isHeading ? (
                            <p className={isMobile
                                ? "font-semibold text-accent-blue/90 pt-3 pb-1 text-base tracking-wide"
                                : isTopLevel
                                    ? "font-semibold text-accent-blue/90 pt-2 pb-1 text-base tracking-wide"
                                    : "font-semibold text-accent-blue/90 pt-2 pb-1 text-sm tracking-wide"}>
                                {link.label}
                            </p>
                        ) : (
                            <a
                                onClick={handleClick}
                                className={isMobile
                                    ? (isTopLevel
                                        ? "block cursor-pointer text-accent-blue/90 hover:text-accent-green transition-all duration-200 py-1.5 text-base font-normal"
                                        : "block cursor-pointer text-accent-blue/70 hover:text-accent-green transition-all duration-200 py-1.5 hover:pl-1 text-base font-normal")
                                    : (isTopLevel
                                        ? "block cursor-pointer text-accent-blue/90 hover:text-accent-green transition-all duration-200 py-1.5 text-base font-normal"
                                        : "block cursor-pointer text-accent-blue/60 hover:text-accent-green transition-all duration-200 py-1 hover:translate-x-1 text-sm font-normal")}
                            >
                                {link.label}
                            </a>
                        )}

                        {link.subLinks && (
                            <div className={isMobile ? "pl-4 mt-2 space-y-1" : isNested ? "pl-4 mt-1 space-y-1 border-l border-accent-blue/10" : "mt-2 space-y-1"}>
                                <RenderSubLinks
                                    links={link.subLinks}
                                    parentPath={parentPath}
                                    navigate={navigate}
                                    closeMenu={closeMenu}
                                    isMobile={isMobile}
                                    depth={depth + 1}
                                />
                            </div>
                        )}

                        {isTopLevel && idx < links.length - 1 && (
                            <div className="border-t border-accent-blue/10 my-2" />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};



/* MegaNav component */
const MegaNav = forwardRef(({ logo, items = [], navigate, closeMenu, baseColor = 'var(--accent-beige)', menuColor = 'var(--accent-blue)' }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState(null);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // desktop dropdown open index
    const mobileMenuRef = useRef(null);
    const location = useLocation();
    const navRef = useRef(null);
    const tlRef = useRef(null);
    const ANIMATION_DURATION = 0.25;

    // expose closeMenu
    useImperativeHandle(ref, () => ({
        closeMenu: () => {
            if (isMobileMenuOpen) {
                if (tlRef.current) {
                    tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
                } else {
                    setIsMobileMenuOpen(false);
                }
            }
            // close desktop dropdown if open
            setOpenDropdownIndex(null);
        }
    }));

    // close mobile menu on route change
    useEffect(() => {
        if (isMobileMenuOpen) {
            if (tlRef.current) {
                tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
            } else {
                setIsMobileMenuOpen(false);
            }
        }
        // also close desktop dropdown when navigation happens (keeps UI consistent)
        setOpenDropdownIndex(null);
    }, [location]);

    // GSAP: animate mobile menu open/close
    useEffect(() => {
        if (!mobileMenuRef.current) return;
        const el = mobileMenuRef.current;

        // prepare
        gsap.set(el, { height: 0, opacity: 0, overflow: 'hidden' });

        const tl = gsap.timeline({ paused: true, defaults: { duration: ANIMATION_DURATION, ease: "power2.out" } });
        tl.to(el, { height: "auto", opacity: 1, duration: ANIMATION_DURATION * 1.5 });
        tl.fromTo(el.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 }, `-=${ANIMATION_DURATION * 1.2}`);

        tlRef.current = tl;
        return () => tl.kill();
    }, []);

    // toggle mobile menu
    const toggleMobileMenu = () => {
        if (!tlRef.current) return;
        if (isMobileMenuOpen) {
            tlRef.current.reverse().eventCallback('onReverseComplete', () => {
                setIsMobileMenuOpen(false);
                setOpenMobileSection(null);
            });
        } else {
            setIsMobileMenuOpen(true);
            tlRef.current.play(0);
        }
    };

    const toggleMobileSection = (index) => {
        setOpenMobileSection(openMobileSection === index ? null : index);
    };

    // desktop dropdown toggle via click
    const handleDesktopToggle = (index) => {
        setOpenDropdownIndex(prev => (prev === index ? null : index));
    };

    // close dropdown on click outside
    useEffect(() => {
        const onDocClick = (e) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) {
                setOpenDropdownIndex(null);
            }
        };
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, []);

    // close dropdown on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setOpenDropdownIndex(null);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    const handleMainLinkClick = (item, index) => {
        // If item has sublinks: only toggle the dropdown — NO navigation
        if (item.subLinks && item.subLinks.length > 0) {
            handleDesktopToggle(index);
            return;
        }

        if (item.page) navigate(item.page);


        setOpenDropdownIndex(null);
        if (isMobileMenuOpen) toggleMobileMenu();
    };


    return (
        <header ref={navRef} className="relative z-50 transition-all duration-300 backdrop-blur-sm shadow-sm" style={{ backgroundColor: baseColor }}>
            <div className="relative mx-auto h-[80px] sm:h-[100px] flex items-center justify-between px-3 sm:px-5 lg:px-10">

                {/* Logo */}
                <Link to="/" className="h-full flex items-center py-2 pl-25 lg:-ml-4 xl:-ml-6 absolute left-1/3 -translate-x-1/2 lg:static lg:translate-x-0" onClick={() => navigate("/")}>
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-[50px] sm:h-[55px] md:h-[60px] transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex h-full items-stretch space-x-1 xl:space-x-2 lg:mr-4 xl:mr-6">
                    {items.map((item, index) => {
                        const isOpen = openDropdownIndex === index;
                        return (
                            <div key={index} className="relative flex items-center h-full">
                                <button
                                    onClick={() => handleMainLinkClick(item, index)}
                                    className={`font-semibold text-base xl:text-lg cursor-pointer flex items-center gap-2 text-accent-blue px-4 py-2 rounded-md transition-all duration-200
                                        ${isOpen ? 'text-accent-green' : 'hover:text-accent-green '}
                                        focus-visible:ring-2 focus-visible:ring-accent-green/40 focus-visible:outline-none`}
                                    aria-expanded={isOpen}
                                    aria-haspopup={!!item.subLinks}
                                >
                                    {item.label}
                                    {item.subLinks && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
                                </button>

                                {/* Desktop dropdown (click-toggle, not hover) */}
                                {item.subLinks && (
                                    <div
                                        className={`absolute top-[calc(100%+0.6rem)] left-1/2 transform -translate-x-1/2
                                            rounded-md border border-accent-blue/10
                                            transition-all duration-250 ease-out 
                                            z-50
                                            ${isOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none translate-y-2'}
                                            min-w-[240px] max-w-[500px] p-6`}
                                        style={{ backgroundColor: baseColor }}
                                        onClick={(e) => e.stopPropagation()} // keep dropdown open when clicking inside
                                    >
                                        <div>
                                            <div>
                                                <RenderSubLinks
                                                    links={item.subLinks}
                                                    parentPath={item.page}
                                                    navigate={navigate}
                                                    closeMenu={() => { }}
                                                    isMobile={false}
                                                    depth={0}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2.5 rounded-md text-accent-blue hover:bg-accent-blue/10 transition-all duration-200 active:scale-95 absolute right-4 lg:static"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu (Animated with GSAP) */}
            <div
                ref={mobileMenuRef}
                className="lg:hidden w-full shadow-2xl z-40 overflow-hidden border-t border-accent-blue/5"
                style={{ backgroundColor: baseColor }}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-100px)] overflow-y-auto">
                    <div className="space-y-1 py-4 px-4 sm:px-6">
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-accent-blue/10 pb-4 last:border-b-0">
                                <div className="flex items-center justify-between gap-2">
                                    <button
                                        onClick={() => {
                                            if (item.subLinks) {
                                                // Only toggle mobile accordion, do NOT navigate
                                                toggleMobileSection(index);
                                                return;
                                            }

                                            // No sublinks → navigate normally
                                            if (item.page) navigate(item.page);

                                            if (tlRef.current) {
                                                tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}

                                        className="font-semibold text-lg sm:text-lg cursor-pointer text-accent-blue hover:text-accent-green transition-colors flex-1 text-left"
                                    >
                                        {item.label}
                                    </button>

                                    {item.subLinks && (
                                        <button
                                            onClick={() => toggleMobileSection(index)}
                                            className="p-2 rounded-md hover:bg-accent-blue/5 transition-colors"
                                            aria-label="Toggle submenu"
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 text-accent-blue transition-transform duration-200 ${openMobileSection === index ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Sublinks for mobile */}
                                {item.subLinks && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileSection === index ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="pl-4 pt-2 pb-1 rounded-md">
                                            <RenderSubLinks
                                                links={item.subLinks}
                                                parentPath={item.page}
                                                navigate={navigate}
                                                closeMenu={() => {
                                                    if (tlRef.current) {
                                                        tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
                                                    } else {
                                                        setIsMobileMenuOpen(false);
                                                    }
                                                }}
                                                isMobile={true}
                                                depth={0}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
});

export default MegaNav;
