import React, { useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '../constants/NavbarConstants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedButton from '../animations/AnimatedButton';

const Navbar = () => {
  const navbarContainer = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // window.innerHeight gives 100vh in pixels
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { y: 50 });

      tl.current = gsap
        .timeline({ paused: true })
        .to('.menu-overlay', {
          duration: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-link-item-holder', {
          y: 10,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        });
    },
    { scope: navbarContainer },
  );

  useEffect(() => {
    isOpen ? tl.current?.play() : tl.current?.reverse();
  }, [isOpen]);

  return (
    <div ref={navbarContainer} className="relative">
      <nav
        className={`fixed  top-0 left-0 w-full h-20 px-8 py-6 flex items-center justify-between z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white text-black' : 'bg-transparent text-main-bg'
        }`}
      >
        <div className="cursor-pointer text-xs  font-normal">
          <a href="/">AQUASWIFT</a>
        </div>
        <div className="cursor-pointer uppercase text-xs  flex items-center gap-4">
          <AnimatedButton
            size="sm"
            variant="dark"
            label="Join Waitlist"
            containerClass="hidden lg:flex"
          />
          <button className="cursor-pointer uppercase flex items-center gap-2" onClick={toggleMenu}>
            Menu <div className="w-2 h-2 rounded-full bg-black" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div className="menu-overlay fixed inset-0 px-8 py-6 flex flex-col bg-main-bg clip-path-hidden z-60">
        {/* Overlay Header */}
        <div className="flex items-center justify-between">
          <a href="/" className="text-lg font-medium">
            Aquaswift
          </a>
        </div>

        {/* Close Icon */}
        <div className="absolute top-8 right-8 cursor-pointer" onClick={toggleMenu}>
          <p className="text-[60px] leading-[70%]">X</p>
        </div>

        {/* Menu Content */}
        <div className="flex-1 flex flex-col justify-between mt-12">
          {/* Links */}
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder relative" onClick={toggleMenu}>
                  <a
                    href={link.href}
                    className="text-[clamp(36px,6vw,80px)] font-normal leading-[85%] tracking-[-.02em]"
                  >
                    {link.name}
                  </a>
                </div>
              </div>
            ))}
            <div className="pt-12">
              <AnimatedButton
                size="md"
                variant="dark"
                label="Join Waitlist"
                fullWidth
                containerClass="flex lg:hidden"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 text-sm uppercase">
              <a href="https://www.x.com">X &#8599;</a>
              <a href="">Instagram &#8599;</a>
              <a href="">LinkedIn &#8599;</a>
              <a href="">Behance &#8599;</a>
              <a href="">Dribbble &#8599;</a>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p>info@aquaswift.com</p>
              <p>6383 680 011</p>
            </div>
          </div>
        </div>

        {/* Bottom Right Preview */}
        <div className="absolute bottom-8 right-14">
          <p className="text-base font-medium">View showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
