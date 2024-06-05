"use client";
import { useEffect, useRef, useState } from 'react';
import MagneticEffect from '../common/magneticEffect/magneticEffect';
import AnimatedButton from '../common/animatedButton';
import gsap from 'gsap';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AnimatedBox from '../common/animationBox/animationBox';
import Image from 'next/image';

import logo from '@/public/logo_with name_clear.png'

const Navbar = () => {
  const navRef = useRef(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isOpen, setIsOpen] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);


  const handleOpen = () => {
    setIsOpen(1);
  };

  const handleClose = () => {
    setIsOpen(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItem = [
    { id: 1, title: 'Services', link: '/services' },
    { id: 2, title: 'Work', link: '/work' },
    { id: 3, title: 'About us', link: '/about-us' },
    { id: 4, title: 'Blog', link: '/blog' },
    { id: 5, title: 'Reviews', link: '/reviews' },
    { id: 6, title: 'Contact us', link: '/contact-us' },
    { id: 7, title: 'Career', link: '/career' },
  ];

  useEffect(() => {
    if (!animationCompleted) {
      gsap.fromTo(
        navRef.current,
        { y: '-100%' },
        {
          y: '0%',
          duration: 1,
          delay: 2,
          onComplete: () => setAnimationCompleted(true),
        }
      );
    }
  }, [animationCompleted]);


  useEffect(() => {
    if (hoveredIndex !== -1) {
      gsap.to(navRef.current.querySelector(`#nav-item-${hoveredIndex}`), {
        color: '#000',
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      });
    } else {
      navRef.current.querySelectorAll('.nav-item').forEach(item => {
        gsap.to(item, {
          color: '#777',
          x: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
      });
    }
  }, [hoveredIndex]);



  const textRef = useRef(null);
  const textTlRef = useRef(null);
  const imageTlRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current?.children;
    const textTl = gsap.timeline({ paused: true });

    gsap.utils.toArray(letters).forEach((letter, index) => {
      textTl.to(letter, { opacity: 0, duration: 1 }, index * 0.1);
    });

    textTlRef.current = textTl;

    const imageTl = gsap.timeline({ paused: true });
    imageTl.to('.image-container', { opacity: 1, duration: 1, delay: 1 });

    imageTlRef.current = imageTl;

    const onScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 200) {
      textTlRef.current.play();
      imageTlRef.current.play();
    } else if (scrollPosition <= 200) {
      textTlRef.current.reverse();
      imageTlRef.current.reverse();
    }
  }, [scrollPosition]);
  // console.log(scrollPosition);

  return (
    <nav className={` w-full fixed top-0  ${scrollPosition > 900 && scrollPosition < 1200 || scrollPosition > 6000 ? 'text-black' : 'bg-transparent text-white'} duration-1000 z-50`}>
      <div ref={navRef} className="flex items-center justify-between md:px-20  py-5">
        <div className="relative">
          <div ref={textRef} className="text-2xl md:text-4xl font-bold">
            <span className="inline-block">W</span>
            <span className="inline-block">E</span>
            <span className="inline-block">B</span>
            <span className="inline-block">I</span>
            <span className="inline-block">Z</span>
            <span className="inline-block">O</span>
            <span className="inline-block">N</span>
            <span className="inline-block">E</span>
          </div>
          <div className="image-container absolute top-0 left-0 w-full  opacity-0">
            <Image quality={100} className='w-1/2' src={logo} alt='logo' />
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <AnimatedButton text={"LET'S TALK"} textColor={""} font={"font-semibold"} textSize={"text-lg"} borderColor={`${scrollPosition > 900 && scrollPosition < 1200 || scrollPosition > 6000 ? 'border-black' : 'border-white'}`} />
          </div>
          <MagneticEffect>
            <button
              onClick={handleOpen}
              className={`focus:outline-none px-2 rounded-full ${scrollPosition > 900 && scrollPosition < 1200 || scrollPosition > 6000 ? 'text-white bg-black' : 'bg-transparent text-black bg-white duration-1000'}`}
            >
              <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </MagneticEffect>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white flex flex-col items-end justify-start z-50  ${isOpen === 1 ? 'animate-expand' : isOpen === 0 ? 'animate-collapse' : 'hidden'} text-black`}
      >
        <div className="w-full flex items-center justify-between md:px-20 py-5 mt-5">
          <div className="">
            <Image quality={100} className='w-1/3 pl-2' src={logo} alt='logo' />
          </div>
          <div className="flex gap-10">
            <div>
              <AnimatedButton text={"LET'S TALK"} textColor={"text-black"} font={"font-semibold"} borderColor={"border-black"} />
            </div>
            <MagneticEffect>
              <button
                onClick={handleClose}
                className="focus:outline-none px-2 bg-gray-800 rounded-full"
              >
                <svg className="size-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </MagneticEffect>
          </div>
        </div>

        <div className="w-full min-h-screen my-auto text-2xl border lg:grid lg:grid-cols-2 gap-5">
          <div className="mx-auto mt-2 md:mt-20 flex">
            <p className="w-20 h-10 text-sm md:text-lg -rotate-90 font-bold uppercase text-primary">Explore</p>
            <div className=" overflow-hidden">
              {navItem.map((item, index) => (
                <AnimatedBox
                  key={item.id}
                  initialPosition="-100%"
                  finalPosition="0%"
                  duration={1}
                  delay={index * 0.2}
                  position="x"
                  isOpen={isOpen}
                >

                  <div
                    key={item.id}
                    id={`nav-item-${index}`}
                    className={`nav-item group  text-base md:text-4xl lg:text-5xl font-bold relative transition-colors duration-1000 ${hoveredIndex === index ? ' text-black' : 'duration-100 text-gray-200'}`}
                  >


                    <span className={`text-sm align-text-top  duration-1000 transition-colors ${hoveredIndex === index ? ' text-black' : 'duration-100 text-gray-200'} ${hoveredIndex === index && `text-primary`} `}>
                      0{item?.id}
                    </span>


                    <Link href={item.link} className="relative">
                      <span
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)} // Reset hoveredIndex to -1 when mouse leaves
                        className={` py-2 inline-block transition-transform duration-1000 ${hoveredIndex === -1 && 'transition-colors duration-1000 text-black'}  ${hoveredIndex === index && `translate-x-5 transition-colors duration-1000 text-primary`}`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </div>

                </AnimatedBox>
              ))}
            </div>
          </div>
          <div className="my-auto mx-auto">

            <div className="p-2">
              <AnimatedBox initialPosition="100%"
                finalPosition="0%"
                duration={1}
                delay={0.2}
                position="y"
                isOpen={isOpen}>
                <AnimatedButton text={"webizoneit@gmail.com"} link={''} textColor={"text-primary"} />
              </AnimatedBox>

              <AnimatedBox initialPosition="100%"
                finalPosition="0%"
                duration={1}
                delay={0.2}
                position="y"
                isOpen={isOpen}>
                <AnimatedButton text={"01601-054041"} link={''} textColor={"text-primary"} />
              </AnimatedBox>
              <AnimatedBox initialPosition="100%"
                finalPosition="0%"
                duration={1}
                delay={0.2}
                position="y"
                isOpen={isOpen}>
                <p className="w-2/3 my-5 text-sm">Road No. 12, Block A, Bosila , Mohammadpur, Dhaka, bangladesh</p>
              </AnimatedBox>

              <AnimatedBox initialPosition="100%"
                finalPosition="0%"
                duration={1}
                delay={0.2}
                position="y"
                isOpen={isOpen}>
                <div className="mt-10 flex gap-5 text-primary">
                  <FaInstagram className="text-xl my-auto" />
                  <FaFacebookF className="text-xl my-auto" />
                  <FaTwitter className="text-xl my-auto" />
                  <FaLinkedinIn className="text-xl my-auto" />
                </div>
              </AnimatedBox>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
