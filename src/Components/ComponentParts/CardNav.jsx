import { useLayoutEffect, useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = forwardRef(({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(255, 255, 255, 0.12)',
  menuColor,
  buttonBgColor,
  buttonTextColor,
  animationDuration = 0.3 // <--- NY PROP OCH STANDARDVÄRDE
}, ref) => {
  const location = useLocation();

  // --- STATE & REFS ---
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  // --- RESET MENU ON ROUTE CHANGE ---
  useEffect(() => {
    setIsHamburgerOpen(false);
    setIsExpanded(false);

    if (tlRef.current) {
      tlRef.current.progress(0).pause();
    }
  }, [location]);

  // --- EXPOSE CLOSE MENU ---
  useImperativeHandle(ref, () => ({
    closeMenu: () => {
      if (isExpanded) {
        const tl = tlRef.current;
        setIsHamburgerOpen(false);
        if (tl) {
          tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
          tl.reverse();
        } else {
          setIsExpanded(false);
        }
      }
    }
  }));

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const detailsEls = navEl.querySelectorAll('details');
    const onToggle = () => {
      if (tlRef.current && isExpanded) {
        const newHeight = calculateHeight();
        // Använd animationDuration här
        gsap.to(navEl, { height: newHeight, duration: animationDuration, ease: 'power2.inOut' });
      }
    };

    detailsEls.forEach(el => el.addEventListener('toggle', onToggle));

    return () => {
      detailsEls.forEach(el => el.removeEventListener('toggle', onToggle));
    };
  }, [isExpanded, animationDuration]); // Lägg till animationDuration som beroende


  // --- HEIGHT CALCULATION FOR ANIMATION ---
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    // Temporärt öppna alla <details> för att få full höjd
    const detailsEls = navEl.querySelectorAll('details');
    const detailsStates = [];
    detailsEls.forEach((el, i) => {
      detailsStates[i] = el.open;
      el.open = true;
    });

    // Mät höjden
    const contentEl = navEl.querySelector('.card-nav-content');
    let totalHeight = 260; // fallback

    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      contentEl.offsetHeight;

      const topBar = 80;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      totalHeight = topBar + contentHeight + padding;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;
    }

    // Återställ <details> till tidigare tillstånd
    detailsEls.forEach((el, i) => {
      el.open = detailsStates[i];
    });

    return totalHeight;
  };


  // --- GSAP TIMELINE CREATION ---
  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 80, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      // Använd animationDuration här
      height: calculateHeight,
      duration: animationDuration, 
      ease: "power2.inOut"
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        // Card-staggern kan behålla sin egen duration eller använda animationDuration
        duration: 0.3, 
        ease: "power3.out",
        stagger: 0.05
      },
      "-=0.25"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // Lägg till animationDuration som beroende här
  }, [ease, items, animationDuration]); 

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // Lägg till animationDuration som beroende här
  }, [isExpanded, animationDuration]); 

  // --- TOGGLE MENU OPEN/CLOSE ---
  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  // --- CARD REFS ---
  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  // --- RECURSIV RENDERING AV LINKS ---
  const RenderLinks = ({ links }) => {
    return (
      <div className="nav-card-links mt-auto flex flex-col gap-[6px]">
        {links.map((lnk, i) => (
          lnk.links ? (
            <details key={i} className="group" open={false}>
              <summary className="cursor-pointer flex justify-between items-center text-[15px] md:text-[16px] text-accent-green select-none">
                {lnk.label}
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="pl-4 mt-1">
                <RenderLinks links={lnk.links} />
              </div>
            </details>
          ) : (
            <a
              key={i}
              onClick={lnk.onClick}
              className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:text-accent-green text-[15px] md:text-[16px]"
              tabIndex={0}
            >
              <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
              {lnk.label}
            </a>
          )
        ))}
      </div>
    )
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] mx-auto z-[99] top-[1.2em] md:top-[2em] ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[80px] p-0 relative overflow-hidden will-change-[height] `}
        style={{ backgroundColor: baseColor }}>

        {/* Top section */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[80px] flex items-center justify-between p-2  pl-[1.1rem] z-[2]">

          {/* Hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#fff' }}>
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-linear ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''} group-hover:opacity-75`} />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-linear ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''} group-hover:opacity-75`} />
          </div>

          {/* Logo */}
          <Link to="/" className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] md:-translate-y-1/2 flex items-center pt-1">
            <img
              src={logo}
              alt={logoAlt}
              className="logo h-[55px] md:h-[70px] transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </Link>

        </div>

        {/* Cards */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[100px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] 
          ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}
          md:flex-row md:flex-wrap md:justify-center md:items-end md:gap-[8px]`}
          aria-hidden={!isExpanded}>

          {(items || []).slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              ref={setCardRef(idx)}
              className="nav-card select-none relative flex flex-col gap-1 p-[12px_16px] rounded-xs min-w-[220px] flex-1 h-auto min-h-[60px] md:min-h-[145px] 
              bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/15 transition-all duration-300"
              style={{ backgroundColor: item.bgColor || 'rgba(255,255,255,0.1)' }}>

              <div
                className="nav-card-label font-medium tracking-[-0.5px] text-[18px] md:text-[22px] cursor-pointer transition"
                style={{ color: 'var(--accent-green)' }}
                onClick={item.onClick}
              >
                {item.label}
              </div>

              {/* Rekursiv rendering av länkar och undermenyer */}
              {item.links && <RenderLinks links={item.links} />}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );

});

export default CardNav;