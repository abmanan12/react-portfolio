import React, { useEffect, useRef } from 'react';

import { Carousel } from '@mantine/carousel';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function OtherProject() {

    const animateRef = useRef(null)
    const inView = useInView(animateRef, { once: false })
    const controls = useAnimation()

    const animationVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [inView, controls])

    return (
        <div className="py-3">

            <h6 className='fw-bold mb-4 text-center'>Other Projects &#128304;</h6>

            <motion.div variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'
                className='container content-width pt-2' ref={animateRef}>

                <Carousel slideSize="60%" height={200} align="start" slideGap="md" controlsOffset="xs" controlSize={20} loop>
                    <Carousel.Slide><img src="assets/social-app.png" className='carousel-width rounded' loading="lazy"
                        alt="network_error" /></Carousel.Slide>
                    <Carousel.Slide><img src="assets/event.PNG" className='carousel-width rounded' loading="lazy"
                        alt="network_error" /></Carousel.Slide>
                    <Carousel.Slide><img src="assets/chat.PNG" className='carousel-width rounded' loading="lazy"
                        alt="network_error" /></Carousel.Slide>
                    <Carousel.Slide><img src="assets/travel-agency.PNG" className='carousel-width rounded' loading="lazy"
                        alt="network_error" /></Carousel.Slide>
                </Carousel>

            </motion.div>
        </div>
    );
}