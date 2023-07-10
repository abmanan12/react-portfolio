import React, { useEffect, useRef } from 'react';

import resume from './resume.pdf'
import { motion, useAnimation, useInView } from 'framer-motion';

import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

export default function Hero() {

    const animateRef = useRef(null)
    const inView = useInView(animateRef, { once: false })
    const controls = useAnimation()

    const animationVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
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
            <div id='hero' className='hero-height'>

                <div className="container d-flex flex-column content-width" ref={animateRef}>
                    <div className="row flex-sm-row-reverse align-items-center">

                        <motion.div className="col-12 col-sm-6 col-md-7 text-center"
                            variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                            <img src="assets/myPic.png" className='img picWidth' alt="network_error" />
                        </motion.div>

                        <motion.div className="col-12 col-sm-6 col-md-5 px-3 px-sm-0 mt-5 mt-sm-0"
                            variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>

                            <h3 className='mb-3'>Front-End React Developer &#128075;</h3>
                            <p style={{ textAlign: 'justify' }}>Hi, I'm Abdul Manan. I'm a Front-end React Developer and
                                very passionate and dedicated to my work.</p>

                            <div className='d-flex align-items-end gap-2'>
                                <a href={resume} download><button className="btn btn-secondary btn-sm btn-cv">Download CV
                                    <span><HiOutlineDocumentDuplicate /></span></button></a>
                                <a href="https://github.com/abmanan12"><i className="fa-brands fa-square-github"></i></a>
                                <a href="https://www.linkedin.com/in/ab-manan/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/ab_manan12/"><i className="fa-brands fa-square-instagram"></i></a>
                            </div>

                        </motion.div>

                    </div>

                    <div className="row mt-5">
                        <motion.div className="col px-3 px-sm-0"
                            variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                            <h5 className='mb-0'>My Services</h5>
                            <p className=' mb-0 pt-3 pt-sm-1' style={{ textAlign: 'justify' }}>Web Development,
                                including Front-End & Back-End (Begginer) Development and App Development, including
                                Front-End Development. </p>
                        </motion.div>
                    </div>

                </div>

            </div>
        </>
    );
}

