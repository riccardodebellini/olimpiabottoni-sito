

import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENT ---
const ImageSequenceAnimation = ({ imageFolder, animatedText, animationLenght,  triggerStart = 'top top', vertical = false }: { imageFolder: string; animatedText: string,  animationLenght: number, triggerStart?: string, vertical?: boolean }) => {
    // --- STATE AND REFS ---
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [frameCount] = useState(animationLenght); // Total number of frames in your sequence
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // --- IMAGE PATH LOGIC ---
    // Generates the path for each frame based on its index
    const getFramePath = (frame: number): string => {
        // Pad the frame number with leading zeros to match the file names (e.g., 001, 002)
        const paddedFrame = String(frame).padStart(3, '0');
        return `/${imageFolder}/ezgif-frame-${paddedFrame}.png`;
    };

    // --- EFFECT: PRELOAD IMAGES ---
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        const imagePromises: Promise<void>[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const promise = new Promise<void>((resolve) => {
                const img = new Image();
                img.src = getFramePath(i);
                img.onload = () => {
                    loadedImages[i - 1] = img;
                    resolve();
                };
            });
            imagePromises.push(promise);
        }

        // Once all images are preloaded, update state and remove loading screen
        Promise.all(imagePromises).then(() => {
            setImages(loadedImages);
            setLoading(false);
        });
    }, [frameCount]);

    const [hasMounted, setHasMounted] = useState(false);

    useLayoutEffect(() => {
        setHasMounted(true);
    }, []);

    // --- EFFECT: SETUP CANVAS AND ANIMATION ---
    useEffect(() => {
        if (hasMounted && !loading && images.length > 0 && canvasRef.current && containerRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const firstImage = images[0];

            // Set canvas dimensions to match the first image
            canvas.width = firstImage.width;
            canvas.height = firstImage.height;

            // Draw the first frame initially
            context?.drawImage(firstImage, 0, 0);

            // Create a virtual object to animate its 'frame' property
            const frameScrubber = { frame: 0 };

            const ctx = gsap.context(() => {
                // Create the GSAP timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: triggerStart,
                        end: '+=3000', // The scroll distance over which the animation occurs
                        scrub: 1,      // Smoothly link animation to scrollbar (a value of 1 provides a little smoothing)
                        pin: true,     // Pin the container while scrolling through the animation
                    },
                });

                // Animate the 'frame' property of our virtual object
                tl.to(frameScrubber, {
                    frame: frameCount - 1,
                    roundProps: 'frame', // Ensure the frame number is always an integer
                    ease: 'none',
                    onUpdate: () => {
                        if (context && images[frameScrubber.frame]) {
                            // On each update, draw the corresponding image frame to the canvas
                            context.clearRect(0, 0, canvas.width, canvas.height);
                            context.drawImage(images[frameScrubber.frame], 0, 0);


                        }
                    },
                }).to(
                    textRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        ease: 'power2.out',
                    },
                    '<50%'
                ).to(
                    backgroundRef.current,
                    {
                        opacity: 1,
                        ease: 'power2.out',
                    },
                    '>'
                );
            }, containerRef); // scope the context to the container

            return () => ctx.revert(); // cleanup
        }
    }, [loading, images, frameCount, hasMounted]);

    // --- RENDER ---
    return (
        <div ref={containerRef} className="relative w-full h-[calc(100dvh)] overflow-hidden ">
            <div ref={backgroundRef} className="absolute inset-0 bg-background opacity-0 z-20"></div>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground">
                    <p className="text-xl">Caricamento...</p>
                </div>
            )}

                    <canvas
                        ref={canvasRef}
                        className={`absolute inset-0 w-full h-full pt-16 object-contain ${vertical ? 'object-cover object-top' : 'md:object-cover md:object-top'}`}
                    />
                    <div className="absolute left-0 w-full bg-gradient-to-t from-background to-transparent  h-[calc(25dvh)] bottom-0"></div>
              
            <div
                ref={textRef}
                className="absolute inset-0 flex items-center justify-center text-foreground text-5xl sm:text-9xl mt-4 font-bold opacity-0 z-50"
                style={{ transform: 'translateY(100%)' }}
            >
                <p>{animatedText}</p>
            </div>
        </div>
    );
};

export default ImageSequenceAnimation;

