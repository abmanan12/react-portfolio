import React, { useEffect, useRef } from 'react'

import { motion, useAnimation, useInView } from 'framer-motion';

import { BiSupport } from 'react-icons/bi';
import { GrCompliance } from 'react-icons/gr';
import { AiOutlineBulb } from 'react-icons/ai';

export default function About() {

  const animateRef = useRef(null)
  const inView = useInView(animateRef, { once: false })
  const controls = useAnimation()

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const animationCard = {
    visible: { opacity: 1, scale: 1, y: 0, },
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

      <div id='about' className='page-height'>

        <div className='text-center pb-3 pb-sm-4'>
          <h3 className='fw-bold mb-0'>About Me</h3>
          <p>Introduction</p>
        </div>

        <div className="container content-width" ref={animateRef}>

          <div className="px-2 px-sm-0">
            <motion.p variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'
              style={{ textAlign: 'justify' }}>As a motivated and dynamic Web and Mobile Developer, I have a strong set of
              skills in HTML, CSS, JavaScript, React, Bootstrap, SCSS and Firebase. Additionally, proficient in the Firebase
              and MERN stack for backend development, I specialize in creating responsive and user-friendly websites. With a
              passion for designing attractive and interactive interfaces, I write clean and efficient code using latest development
              tools and technologies. I am also fascinated by Prompt Engineering, optimizing AI queries for enhanced user
              experiences. I am always looking for new challenges and opportunities to learn and grow. I am confident that my skills
              and experience would be a valuable asset to your team. Collaborating with cross-functional teams, I enjoy creating
              exceptional web applications.
            </motion.p>
          </div>

          <motion.div className="d-flex about-card gap-2 mx-2 mx-sm-0"
            variants={animationCard} animate={controls} transition={{ duration: 2.5, delay: 0.25, }} initial='hidden'>
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><AiOutlineBulb /></p>
              <h6 className='mb-1'>Experience</h6>
              <p className='mb-1'>1+ year</p>
            </div>
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><GrCompliance /></p>
              <h6 className='mb-1'>Completed</h6>
              <p className='mb-1'>15+ projects</p>
            </div>
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><BiSupport /></p>
              <h6 className='mb-1'>Support</h6>
              <p className='mb-1'>online 24/7</p>
            </div>
          </motion.div>

        </div>

      </div>

    </>
  )
}
