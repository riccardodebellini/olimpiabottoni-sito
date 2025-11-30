"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoScroller = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const coolVideo = videoRef.current;
        const container = containerRef.current;

        if (!coolVideo || !container) return;

        // Function to set up the GSAP timeline and ScrollTrigger
        const setupGsap = () => {
            // Ensure we have a duration to animate to
            if (coolVideo.duration) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                        markers: process.env.NODE_ENV === 'development',
                    }
                });

                tl.to(coolVideo, {
                    currentTime: coolVideo.duration,
                    ease: "none"
                });
            }
        };

        // Attempt to prime the video for autoplay on mobile
        coolVideo.play().then(() => {
            coolVideo.pause();
            console.log("Video primed for scrubbing.");
        }).catch(error => {
            console.error("Video priming failed. Scrubbing might not work on some mobile browsers.", error);
        });

        // Check if metadata is already loaded.
        // readyState >= 1 means HAVE_METADATA or higher.
        if (coolVideo.readyState >= 1) {
            setupGsap();
        } else {
            // If not, wait for the 'loadedmetadata' event
            coolVideo.addEventListener('loadedmetadata', setupGsap);
        }

        // Cleanup function to run when the component unmounts
        return () => {
            coolVideo.removeEventListener('loadedmetadata', setupGsap);
            // Kill all ScrollTrigger instances associated with this component
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => {
                if (trigger.trigger === container) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        // This container defines the scrollable area for the animation.
        // Adjust its height to control the scroll duration of the video animation.
        <div ref={containerRef} className="relative h-[250vh] w-full">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    muted // Muted is essential for autoplay policies
                >
                    <source src="/my-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoScroller;