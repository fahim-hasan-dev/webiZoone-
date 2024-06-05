import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const boxRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        if (!animationCompleted) {
            gsap.fromTo(
                boxRef.current,
                { x: "-100%" },
                {
                    x: "0%",
                    duration: 2,
                    scrollTrigger: {
                        trigger: boxRef.current,
                        start: "top bottom",
                        end: "top top",
                        scrub: false,
                        onEnter: () => setAnimationCompleted(true),
                    },
                }
            );
        }
    }, [animationCompleted]);

    return (
        <div className="min-h-screen  relative flex flex-col justify-center items-center lg:p-5 xl:p-0">
            <div
                ref={boxRef}
                className="animated-box absolute top-0 left-0 w-full min-h-screen bg-[#804769] z-0"
            ></div>
            <div className="max-w-screen-xl  z-10 text-white flex flex-col justify-center items-center lg:justify-normal lg:items-start">
                <div className=" mb-10 overflow-hidden">
                    <ScrollAnimation
                        initialPosition="100%"
                        finalPosition="0%"
                        duration={2}
                        delay={1.5}
                        position="y"
                    >

                        <p className="uppercase text-white text-base flex flex-wrap ">
                            <span className="mr-2">A</span>
                            <span className="mr-2"></span>
                            <span className="mr-2">D</span>
                            <span className="mr-2">I</span>
                            <span className="mr-2">G</span>
                            <span className="mr-2">I</span>
                            <span className="mr-2">T</span>
                            <span className="mr-2">A</span>
                            <span className="mr-2">L</span>
                            <span className="mr-2"></span>
                            <span className="mr-2">A</span>
                            <span className="mr-2">G</span>
                            <span className="mr-2">E</span>
                            <span className="mr-2">N</span>
                            <span className="mr-2">C</span>
                            <span className="mr-2">Y</span>
                        </p>
                    </ScrollAnimation>
                </div>
                <div className=" mb-10 overflow-hidden md:px-20 px-4 text-center lg:text-left">
                    <ScrollAnimation
                        initialPosition="40%"
                        finalPosition="0%"
                        duration={2}
                        delay={0}
                        position="x"
                    >
                        <h2 className="md:text-4xl text-2xl font-bold lg:leading-loose leading-relaxed tracking-wide">
                            We are a web design and development company, building websites that drive traffic, engagement, and conversion for industry-leading brands and startups in Silicon Valley. 
                        </h2>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default About;
