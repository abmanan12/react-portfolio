import React from 'react'

export default function About() {
  return (
    <>

      <div id='about' className='py-5'>

        <div className="container content-width">
          <div className="row contentCenter">

            <div className='text-center pb-4'>
              <h3 className='fw-bold mb-0'>About Me</h3>
              <p>Introduction</p>
            </div>

            <div className="col-12 col-sm-6 text-center">
              {/* <h3>Front-End React Developer &#128075;</h3> */}
              <img src="assets/aboutPic.jpg" width='100%' style={{ transform: 'scale(0.9)' }} alt="network_error" />
              <button className='btn btn-secondary mt-3'>Download CV</button>
            </div>

            <div className="col-12 col-sm-6 px-4 px-sm-0">
              <p style={{ textAlign: 'justify' }}>As a Junior Front-End Developer, I have a strong set of skills in HTML, CSS,
                JavaScript, React, Bootstrap, and SCSS. I specialize in creating and maintaining websites that are responsive
                and provide a user-friendly experience. I enjoy designing attractive and interactive interfaces by writing
                clean and efficient code using the latest development tools and technologies. I also enjoy working in teams
                and collaborating with cross-functional colleagues to create exceptional web applications.</p>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}
