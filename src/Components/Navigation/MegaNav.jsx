import { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronDown, Menu, X } from 'lucide-react';

// Funktion för att rendera rekursivt länkarna
const RenderSubLinks = ({ links, parentPath, navigate, closeMenu, isMobile = false }) => {
    return (
        <ul className={isMobile ? "space-y-2" : "text-sm space-y-2"}>
            {links.map((link, idx) => {
                const fullPath = link.hash ? parentPath + link.hash : parentPath;
                const isHeading = !link.hash && link.subLinks;
                
                // Hanterar klick på en länk
                const handleClick = () => {
                    if (link.isExternalPage) {
                        navigate(link.hash);
                    } else if (!isHeading) {
                        navigate(fullPath);
                    }
                    closeMenu();
                };
                
                return (
                    <li key={idx}>
                        {isHeading ? (
                            // Level 1.2 "Technology" - Heading that is not clickable
                            <p className={isMobile 
                                ? "font-semibold text-accent-blue/90 pt-3 pb-1 text-base" 
                                : "font-semibold text-accent-blue/90 pt-2 pb-1"}>
                                {link.label}
                            </p>
                        ) : (
                            // Link (e.g. Services, Methods, Instruments)
                            <a 
                                onClick={handleClick}
                                className={isMobile
                                    ? "block cursor-pointer text-accent-blue/80 hover:text-accent-green transition-all duration-200 py-1.5 hover:pl-1 text-base"
                                    : "block cursor-pointer text-accent-blue/75 hover:text-accent-green transition-all duration-200 py-1 hover:translate-x-1"}
                            >
                                {link.label}
                            </a>
                        )}

                        {/* Third level (e.g. under Technology) */}
                        {link.subLinks && (
                            <div className={isMobile ? "pl-4 mt-2 space-y-1" : "pl-4 mt-1 space-y-1"}>
                                <RenderSubLinks 
                                    links={link.subLinks} 
                                    parentPath={parentPath} 
                                    navigate={navigate} 
                                    closeMenu={closeMenu}
                                    isMobile={isMobile}
                                />
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};


const MegaNav = forwardRef(({ 
    logo, 
    items, 
    navigate, 
    baseColor = 'var(--accent-beige)', 
    menuColor = 'var(--accent-blue)' 
}, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState(null);
    const mobileMenuRef = useRef(null);
    const location = useLocation();

    // GSAP Timeline for mobile menu
    const tlRef = useRef(null);
    const ANIMATION_DURATION = 0.25;

    // Create a close function that can be called externally
    useImperativeHandle(ref, () => ({
        closeMenu: () => {
            if (isMobileMenuOpen) {
                // Close mobile menu if it is open
                tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
            }
        }
    }));

    // Close menu on navigation
    useEffect(() => {
        if (isMobileMenuOpen) {
            if (tlRef.current) {
                tlRef.current.reverse().eventCallback('onReverseComplete', () => setIsMobileMenuOpen(false));
            }
        }
    }, [location]);

    // Create GSAP Timeline for mobile menu
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        const tl = gsap.timeline({ paused: true, defaults: { duration: ANIMATION_DURATION, ease: "power2.out" } });
        
        // Initial setup
        gsap.set(mobileMenuRef.current, { height: 0, opacity: 0, overflow: 'hidden' });
        
        tl.to(mobileMenuRef.current, { height: "auto", opacity: 1, duration: ANIMATION_DURATION * 1.5 });
        tl.fromTo(mobileMenuRef.current.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 }, `-=${ANIMATION_DURATION}`);

        tlRef.current = tl;

        return () => {
            tl?.kill();
        };
    }, []);

    // Toggle mobile menu
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
    
    // Toggle mobile section
    const toggleMobileSection = (index) => {
        setOpenMobileSection(openMobileSection === index ? null : index);
    };
    
    // Handle click on a main link in the desktop menu
    const handleMainLinkClick = (item) => {
        navigate(item.path);
        if (isMobileMenuOpen) toggleMobileMenu();
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 backdrop-blur-sm" style={{ backgroundColor: baseColor }}>
            <div className="max-w-7xl mx-auto h-[80px] sm:h-[100px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
                
                {/* Logo */}
                <Link to="/" className="h-full flex items-center py-2 -ml-10" onClick={() => navigate("/")}>
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-[50px] sm:h-[55px] md:h-[60px] transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex h-full items-stretch space-x-1 xl:space-x-2">
                    {items.map((item, index) => (
                        <div key={index} className="group relative flex items-center h-full">

                            {/* Main link */}
                            <a 
                                onClick={() => handleMainLinkClick(item)}
                                className="font-semibold text-base xl:text-lg cursor-pointer flex items-center gap-1 text-accent-blue hover:text-accent-green transition-all duration-200 px-3 xl:px-4 py-2 rounded-md hover:bg-accent-blue/5"
                            >
                                {item.label}
                                {item.subLinks && <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
                            </a>

                            {/* Mega Menu Dropdown */}
                            {item.subLinks && (
                                <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 
                                                bg-white shadow-2xl rounded-xl opacity-0 invisible pointer-events-none 
                                                group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
                                                transition-all duration-200 ease-out
                                                group-hover:translate-y-0 translate-y-2
                                                p-6 min-w-[280px] max-w-[360px] border border-gray-200/50 z-50">
                                    <RenderSubLinks 
                                        links={item.subLinks} 
                                        parentPath={item.path} 
                                        navigate={navigate} 
                                        closeMenu={() => {}}
                                        isMobile={false}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2.5 rounded-lg text-accent-blue hover:bg-accent-blue/10 transition-all duration-200 active:scale-95"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu (Animated with GSAP) */}
            <div 
                ref={mobileMenuRef}
                className="lg:hidden w-full bg-white shadow-2xl absolute top-[80px] sm:top-[100px] z-40 overflow-hidden border-t border-gray-200"
                style={{ height: isMobileMenuOpen ? 'auto' : 0 }} 
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-100px)] overflow-y-auto">
                    <div className="space-y-1 py-4 px-4 sm:px-6">
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-gray-200/70 pb-4 last:border-b-0">
                                {/* Main link for mobile */}
                                <div className="flex items-center justify-between gap-2">
                                    <a 
                                        onClick={() => handleMainLinkClick(item)}
                                        className="font-bold text-lg sm:text-xl cursor-pointer text-accent-blue hover:text-accent-green transition-colors flex-1"
                                    >
                                        {item.label}
                                    </a>
                                    {item.subLinks && (
                                        <button
                                            onClick={() => toggleMobileSection(index)}
                                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                            aria-label="Toggle submenu"
                                        >
                                            <ChevronDown 
                                                className={`w-5 h-5 text-accent-blue transition-transform duration-200 ${
                                                    openMobileSection === index ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        </button>
                                    )}
                                </div>
                                
                                {/* Sublinks for mobile */}
                                {item.subLinks && (
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openMobileSection === index ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="pl-4 pt-2 pb-1 bg-gray-50/50 rounded-lg">
                                            <RenderSubLinks 
                                                links={item.subLinks} 
                                                parentPath={item.path} 
                                                navigate={navigate} 
                                                closeMenu={toggleMobileMenu}
                                                isMobile={true}
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