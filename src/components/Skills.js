import React, { useEffect, useRef } from 'react'

import { motion, useAnimation, useInView } from 'framer-motion'

export default function Skills() {

    const animateRef = useRef(null)
    const inView = useInView(animateRef, { once: false })
    const controls = useAnimation()

    const animationCard = {
        visible: { opacity: 1, y: 0, scale: 1, },
        hidden: { opacity: 0, y: 75, scale: 0.75 },
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
            <div id='skills' className='page-height'>

                <div className="container content-width">

                    <div className='text-center pb-3 pb-sm-5'>
                        <h3 className='fw-bold mb-0'>Skills</h3>
                        <p>My Technical Level</p>
                    </div>

                    <motion.div className="row contentCenter align-items-center" ref={animateRef}
                        variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>

                        <div className="col-12 col-sm-6 card-align">
                            <div className="card card1 p-3 mx-2">
                                <h5 className="py-3 text-center fw-bold">Frontend Developer</h5>
                                <div className="row">
                                    <div className="col">
                                        {/* <h6 className='mb-0'><span className='pe-2'><i className="fa-solid fa-circle-check">
                                        </i></span>HTML</h6> */}
                                        <h6 className='mb-0 fw-bold'>HTML</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Bootstrap</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>CSS</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>JavaScript</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>React Js</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>React Native</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 card-align mt-3 mt-sm-0">
                            <div className="card card2 p-3">
                                <h5 className="py-3 text-center fw-bold">Backend Developer</h5>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Firebase</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>NodeJs</h6>
                                        <p>Begginer</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Express</h6>
                                        <p>Begginer</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Mongodb</h6>
                                        <p>Begginer</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Git</h6>
                                        <p>Begginer</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0 fw-bold'>Github</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </>
    )
}
