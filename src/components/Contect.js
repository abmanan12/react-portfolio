import React, { useEffect, useRef } from 'react'

import { motion, useAnimation, useInView } from 'framer-motion';

import emailjs from '@emailjs/browser'
import { useFormik } from 'formik';
import { contactSchema } from './Schema';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

const initialValues = {
  name: '',
  email: '',
  project: ''
}

export default function Contect() {

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


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      emailjs.send('service_4h6k1ow', 'template_r7w45k5', values, '2Ze704LpG-eKtAshb')
        .then((response) => {
          console.log(response);
          console.log('Email sent successfully!');
          action.resetForm();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
    },
  })


  return (
    <>

      <div id='contect' className='page-height'>

        <div className='text-center pb-3 pb-sm-5'>
          <h3 className='fw-bold mb-0'>Contact Me</h3>
          <p>Get in touch</p>
        </div>

        <div className="container content-width">
          <div className="row" ref={animateRef}>

            <div className="col-12 col-sm-6 card-align">
              <h5 className='text-center pb-2'>Talk to me</h5>

              <div className="row">
                <motion.div className="col"
                  variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>
                  <div className="card mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><AiOutlineMail /></p>
                    <h6 className='mb-0 fw-bold'>Gmail</h6>
                    <p className='mb-1'>abdulmanankam</p>
                    <p className='mb-0 write'><a href="mailto:abdulmanankam@gmail.com">write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </motion.div>
              </div>

              <div className="row">
                <motion.div className="col"
                  variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.30, }} initial='hidden'>
                  <div className="card my-3 mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><FaWhatsapp /></p>
                    <h6 className='mb-0 fw-bold'>Whatsapp</h6>
                    <p className='mb-1'>+92 302 4946737</p>
                    <p className='mb-0 write'><a href="https://api.whatsapp.com/send?phone=923024946737">write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </motion.div>
              </div>

              <div className="row">
                <motion.div className="col"
                  variants={animationCard} animate={controls} transition={{ duration: 2, delay: 0.35, }} initial='hidden'>
                  <div className="card mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><RiMessengerLine /></p>
                    <h6 className='mb-0 fw-bold'>Messenger</h6>
                    <p className='mb-1'>amanan.kamboh.7</p>
                    <p className='mb-0 write'><a href='https://m.me/amanan.kamboh.7'>write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </motion.div>
              </div>

            </div>

            <div className="col-12 col-sm-6 mt-5 mt-sm-0">
              <h5 className='text-center pb-2'>Write me your project</h5>

              <div className="row">
                <motion.div className="col form-width"
                  variants={animationVariants} animate={controls} transition={{ duration: 2, delay: 0.25, }} initial='hidden'>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input type="text" className="form-control input-width py-2" name='name'
                        onChange={handleChange} onBlur={handleBlur} value={values.name}
                        placeholder="Insert your name" />
                      {errors.name && touched.name ? <p className='errorText'>{errors.name}</p> : null}
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control input-width py-2" name='email'
                        onChange={handleChange} onBlur={handleBlur} value={values.email}
                        placeholder="Insert your email" />
                      {errors.email && touched.email ? <p className='errorText'>{errors.email}</p> : null}
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control input-width" style={{ resize: 'none' }}
                        name='project' onChange={handleChange} onBlur={handleBlur} value={values.project}
                        rows="4" placeholder='Write your project'></textarea>
                      {errors.project && touched.project ? <p className='errorText'>{errors.project}</p> : null}
                    </div>
                    <div className="mb-4 ms-1">
                      <button className='btn btn-secondary btn-sm btn-cv'>Send Message
                        <span><HiOutlineDocumentDuplicate /></span></button>
                    </div>
                  </form>

                </motion.div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}
