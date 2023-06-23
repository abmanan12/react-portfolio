import React from 'react'

import { BiSupport } from 'react-icons/bi';
import { GrCompliance } from 'react-icons/gr';
import { AiOutlineBulb } from 'react-icons/ai';

export default function About() {
  return (
    <>

      <div id='about' className='page-height'>

        <div className="container content-width">

          <div className='text-center pb-3 pb-sm-5'>
            <h3 className='fw-bold mb-0'>About Me</h3>
            <p>Introduction</p>
          </div>

          <div className="px-2 px-sm-0">
            <p style={{ textAlign: 'justify' }}>As a Junior Front-End Developer, I have a strong set of skills in HTML, CSS,
              JavaScript, React, Bootstrap, and SCSS. I specialize in creating and maintaining websites that are responsive
              and provide a user-friendly experience. I enjoy designing attractive and interactive interfaces by writing
              clean and efficient code using the latest development tools and technologies. I also enjoy working in teams
              and collaborating with cross-functional colleagues to create exceptional web applications.</p>
          </div>

          <div className="d-flex about-card gap-2 mx-2 mx-sm-0">
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><AiOutlineBulb /></p>
              <h6 className='mb-1'>Experience</h6>
              <p className='mb-1'>1+ year</p>
            </div>
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><GrCompliance /></p>
              <h6 className='mb-1'>Completed</h6>
              <p className='mb-1'>10+ projects</p>
            </div>
            <div className="card p-3 text-center">
              <p className='mb-1 fs-5'><BiSupport /></p>
              <h6 className='mb-1'>Support</h6>
              <p className='mb-1'>online 24/7</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
