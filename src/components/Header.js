import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

export default function Header() {

    const animateRef = useRef(null)
    const inView = useInView(animateRef, { once: false })
    const controls = useAnimation()

    const animationVariants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
    };

    const animationCard = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.75, y: 100 },
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
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container" ref={animateRef}>

                    <a className="navbar-brand" href="#">Abdul Manan</a>

                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0"
                            variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                            <li className="nav-item">
                                <a className="nav-link" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contect">Contect</a>
                            </li>
                        </motion.ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
