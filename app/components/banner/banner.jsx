"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SvgAnimation from "./svgAnimation";
import ButtonComponent from "../common/button/button";
import AnimatedBox from "../common/animationBox/animationBox";

const BannerComponent = () => {

    const boxRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        // Only play the animation if it hasn't been completed yet
        if (!animationCompleted) {
            // Using gsap.fromTo to animate from -100% to 0% and stay at 0% after animation
            gsap.fromTo(
                boxRef.current,
                { x: "-100%" },
                {
                    x: "0%",
                    duration: 1,
                    delay: 1,
                    onComplete: () => setAnimationCompleted(true),
                }
            );
        }
    }, [animationCompleted]);

    return (
        <div className="min-h-screen relative">
            <div
                ref={boxRef}
                className="animated-box absolute top-0 left-0 w-full min-h-screen bg-[#270f1e] z-0"
            ></div>

            <SvgAnimation />


            <div className="absolute top-36  left-0 min-h-screen  z-0 text-gray-100">
                <div className="w-full mt-20 md:mt-40 pl-5 md:pl-10 lg:pl-60  p-2">

                    <div className=" mb-10 overflow-hidden">
                        <AnimatedBox
                            initialPosition="0%"
                            finalPosition="100%"
                            duration={2}
                            delay={2}
                            position="y"
                        >

                            <p className="uppercase text-[#e261b1] font-semibold text-base flex flex-wrap ">
                                <span className="mr-2">W</span>
                                <span className="mr-2">e</span>
                                <span className="mr-2"></span>
                                <span className="mr-2"></span>
                                <span className="mr-2">a</span>
                                <span className="mr-2">r</span>
                                <span className="mr-2">e</span>
                                <span className="mr-2"></span>
                                <span className="mr-2"></span>
                                <span className="mr-2">W</span>
                                <span className="mr-2">E</span>
                                <span className="mr-2">B</span>
                                <span className="mr-2">I</span>
                                <span className="mr-2">Z</span>
                                <span className="mr-2">O</span>
                                <span className="mr-2">N</span>
                                <span className="mr-2">E</span>
                                <span className="mr-2"></span>
                                <span className="mr-2"></span>
                                <span className="mr-2">I</span>
                                <span className="mr-2">T</span>
                            </p>
                        </AnimatedBox>
                    </div>

                    <div className="lg:w-3/5 lg:ml-10 overflow-hidden">

                        <AnimatedBox
                            initialPosition="0%"
                            finalPosition="100%"
                            duration={2}
                            delay={2}
                            position="y"
                        >

                            <h1 className="font-bold text-4xl lg:text-7xl">Experience digital solutions under one roof</h1>
                        </AnimatedBox>
                    </div>


                    <div className="lg:w-3/5 lg:ml-10 text-base md:text-xl mt-5 overflow-hidden">

                        <AnimatedBox
                            initialPosition="0%"
                            finalPosition="100%"
                            duration={2}
                            delay={2}
                            position="y"
                        >

                            <p >Empowering innovation with integrity <span className="text-[#e261b1]">WebiZone it</span>  where technology meets islamic principles
                            </p>
                        </AnimatedBox>
                    </div>




                    <div className="mt-20 lg:ml-10 overflow-hidden">
                        <AnimatedBox
                            initialPosition="0%"
                            finalPosition="100%"
                            duration={2}
                            delay={2}
                            position="y"
                        >

                            <ButtonComponent text={'Get to know us'} link={'/'} BGColor={"bg-[#69254f]"} />
                        </AnimatedBox>
                    </div>


                </div>
            </div>


            <div className="fixed text-gray-400 bottom-40 -right-10 md:right-10 flex gap-5 rotate-90 z-40">
                <p className="border-b w-20 my-auto animate-expand"></p>
                <p className="uppercase"> Scroll</p>
            </div>
        </div>
    );
};

export default BannerComponent;