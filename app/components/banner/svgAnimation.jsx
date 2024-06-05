import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedBox from "../common/animationBox/animationBox";
const SvgAnimation = () => {
    const boxRef2 = useRef(null);

    useEffect(() => {
        const svgs = boxRef2.current.querySelectorAll("svg");

        svgs.forEach((svg, index) => {
            // Create the mask rectangle
            const maskRect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
            );
            maskRect.setAttribute("x", "0%");
            maskRect.setAttribute("y", "0");
            maskRect.setAttribute("width", "0%"); // Initially set width to 0%
            maskRect.setAttribute("height", "100%");
            maskRect.setAttribute("fill", "white");

            // Create unique mask ID
            const maskId = `mask-${index}`;
            svg.style.mask = `url(#${maskId})`;

            // Append mask to SVG
            const defs = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs"
            );
            const maskElement = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "mask"
            );
            maskElement.setAttribute("id", maskId);
            maskElement.appendChild(maskRect);
            defs.appendChild(maskElement);
            svg.prepend(defs);

            // GSAP Animation
            gsap.to(maskRect, { width: "100%", duration: 1, ease: "power2.inOut" });
        });
    }, []);

    const boxRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        // Only play the animation if it hasn't been completed yet
        if (!animationCompleted) {
            // Using gsap.fromTo to animate from -100% to 0% and stay at 0% after animation
            gsap.fromTo(
                boxRef.current,
                { x: "110%" },
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
        <div className="relative min-h-screen overflow-hidden">

            <AnimatedBox
                initialPosition="0%"
                finalPosition="100%"
                duration={2}
                delay={1}
                position="x"
            >

                <svg height="1030" width="1030" className="absolute hidden md:block w-2/3 lg:left-1/3 b">
                    <circle
                        cx="615"
                        cy="515"
                        r="400"
                        stroke="#9c9c9c"
                        strokeWidth="1"
                        strokeDasharray="3236 3236"
                        fill="none"
                        strokeDashoffset="0"
                    ></circle>
                </svg>
            </AnimatedBox>
            <section className="absolute w-1/3 lg:w-96  right-0   lg:left-[60%]  overflow-hidden ">
                <section className="" ref={boxRef2}>
                    <div className="">
                        <svg width="350" height="267" className="n gray">
                            <path
                                fillRule="evenodd"
                                fill="#470a2f"
                                d="M349.059 61.399L134.819 198.92h214.24v67.784H0V219.09c0-8.018 4.087-15.49 10.856-19.844L213.748 68.72H38.608C17.285 68.72 0 51.525 0 30.316V.936h349.059v60.463z"
                            ></path>
                        </svg>
                        <svg width="352" height="256" className="u gray">
                            <path
                                fillRule="evenodd"
                                fill="#470a2f"
                                d="M352 128.164c0 71.195-48.533 127.766-122.561 127.766H0v-29.38c0-21.21 17.285-38.404 38.608-38.404h188.377c40.201 0 64.225-23.413 64.225-59.982 0-36.576-24.024-60.469-64.225-60.469H38.608C17.285 67.695 0 50.501 0 29.291V.397h229.439C303.467.397 352 56.962 352 128.164z"
                            ></path>
                        </svg>
                        <svg width="341" height="394" className="a">
                            <path
                                fillRule="evenodd"
                                fill="#f9f9f9"
                                d="M199.278.234h-59.01L.055 393.736h50.689c16.63 0 31.417-10.8 36.787-26.865l14.299-42.774 21.112-64.658 48.72-143.143 47.099 143.143 20.035 64.658 13.873 42.502c5.291 16.206 20.144 27.137 36.877 27.137h50.479L199.278.234z"
                            ></path>
                        </svg>

                        <svg width="349" height="251" className="b gray">
                            <path
                                d="M349.01 106.046V251H38.61A38.462 38.462 0 0 1 0 212.69V111.884C0 44.271 38.24 4.87 98.04 4.87c38.72 0 63.72 25.3 72.06 42.806 9.8-20.917 31.86-47.67 78.42-47.67 65.2 0 100.49 44.265 100.49 106.04zM60.79 117.233v66.157h68.51a11.837 11.837 0 0 0 11.88-11.79v-54.367c0-28.7-16.18-44.748-40.2-44.748s-40.19 16.052-40.19 44.748zm141.66-4.379v70.536h73.9a11.837 11.837 0 0 0 11.88-11.79v-58.746c0-30.643-19.61-45.235-43.14-45.235s-42.64 14.592-42.64 45.235z"
                                fill="#470a2f"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </section>

                <section ref={boxRef} className="absolute top-0 left-0 ">
                    <svg width="350" height="267" className="n gray" >
                        <path
                            fillRule="evenodd"
                            fill="#470a2f"
                            d="M349.059 61.399L134.819 198.92h214.24v67.784H0V219.09c0-8.018 4.087-15.49 10.856-19.844L213.748 68.72H38.608C17.285 68.72 0 51.525 0 30.316V.936h349.059v60.463z"
                        ></path>
                    </svg>

                    <svg width="352" height="256" className="u gray">
                        <path
                            fillRule="evenodd"
                            fill="#470a2f"
                            d="M352 128.164c0 71.195-48.533 127.766-122.561 127.766H0v-29.38c0-21.21 17.285-38.404 38.608-38.404h188.377c40.201 0 64.225-23.413 64.225-59.982 0-36.576-24.024-60.469-64.225-60.469H38.608C17.285 67.695 0 50.501 0 29.291V.397h229.439C303.467.397 352 56.962 352 128.164z"
                        ></path>
                    </svg>

                    <svg width="341" height="394" className="a">
                        <path
                            fillRule="evenodd"
                            fill="#470a2f"
                            d="M199.278.234h-59.01L.055 393.736h50.689c16.63 0 31.417-10.8 36.787-26.865l14.299-42.774 21.112-64.658 48.72-143.143 47.099 143.143 20.035 64.658 13.873 42.502c5.291 16.206 20.144 27.137 36.877 27.137h50.479L199.278.234z"
                        ></path>
                    </svg>

                    <svg width="349" height="251" className="b gray" theme="black">
                        <path
                            d="M349.01 106.046V251H38.61A38.462 38.462 0 0 1 0 212.69V111.884C0 44.271 38.24 4.87 98.04 4.87c38.72 0 63.72 25.3 72.06 42.806 9.8-20.917 31.86-47.67 78.42-47.67 65.2 0 100.49 44.265 100.49 106.04zM60.79 117.233v66.157h68.51a11.837 11.837 0 0 0 11.88-11.79v-54.367c0-28.7-16.18-44.748-40.2-44.748s-40.19 16.052-40.19 44.748zm141.66-4.379v70.536h73.9a11.837 11.837 0 0 0 11.88-11.79v-58.746c0-30.643-19.61-45.235-43.14-45.235s-42.64 14.592-42.64 45.235z"
                            fill="#470a2f"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </section>
            </section>
        </div>
    );
};

export default SvgAnimation;
