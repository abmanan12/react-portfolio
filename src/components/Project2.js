import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Project2() {

    const animateRef = useRef(null)
    const inView = useInView(animateRef, { once: false })
    const controls = useAnimation()

    const animationCard = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.50, y: 100 },
    };

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
        <>

            <div className='py-3'>

                <div className="container content-width">
                    <div className="row flex-sm-row-reverse contentCenter text-center" ref={animateRef}>

                        <h6 className='fw-bold mb-4'>E-COMMERCE &#128293;</h6>

                        <motion.div className="col-12 col-sm-6 text-center"
                            variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                            <img src="assets/ecommerce.png" className='project-img rounded' alt="network_error" />
                            <h6 className='my-3 mb-sm-0 demo'>
                                <a href="https://ecommerce-app-a0516.web.app/" target="_blank" rel="noopener noreferrer">
                                    Live Demo <span className='fs-5'>{<HiOutlineLogout />}</span></a>
                            </h6>
                        </motion.div>

                        <motion.div className="col-12 col-sm-6 px-3"
                            variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                            <p style={{ textAlign: 'justify' }}>An e-commerce plateform provides customers the ability to browse,
                                search, add products to cart and submit reviews. Implemented authentication for secure customer access,
                                checkout functionality for payment and contact form to facilitate communication, It effectively meets
                                customers' e-commerce needs.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>

        </>
    )
}
