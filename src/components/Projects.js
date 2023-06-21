import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';

export default function Projects() {
  return (
    <>

      <div id='projects' className='py-5'>

        <div className="container content-width">
          <div className="row">

            <div className='text-center pb-4'>
              <h3 className='fw-bold mb-0'>Contact Me</h3>
              <p>Get in touch</p>
            </div>

            <div className="col-12 col-sm-6">
              <h5 className='text-center'>Talk to me</h5>

              <div className="row">
                <div className="col">
                  <div className="card mx-5 mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center">
                    <h6 className='mb-0'><AiOutlineMail /></h6>
                    <p className='mb-0'>Email</p>
                    <p className='mb-0'>abdulmanankam@gmail.com</p>
                    <p className='mb-0'><a>write me </a><AiOutlineArrowRight /></p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="card my-3 mx-5 mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center">
                    <h6 className='mb-0'><FaWhatsapp /></h6>
                    <p className='mb-0'>Whatsapp</p>
                    <p className='mb-0'>+92 302 4946737</p>
                    <p className='mb-0'><a>write me </a><AiOutlineArrowRight /></p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="card mx-5 mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center">
                    <h6 className='mb-0'><RiMessengerLine /></h6>
                    <p className='mb-0'>Messenger</p>
                    <p className='mb-0'>amanan.kamboh.7</p>
                    <p className='mb-0'><a href='https://www.facebook.com/amanan.kamboh.7/'>write me
                    </a><AiOutlineArrowRight /></p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 col-sm-6">
              <h5 className='text-center'>Write me your project</h5>

              <div className="row">
                <div className="col">
                  <div className="mb-4">
                    <input type="text" className="form-control shadow-none py-2" placeholder="Insert your name" />
                  </div>
                  <div className="mb-4">
                    <input type="email" className="form-control shadow-none py-2" placeholder="Insert your email" />
                  </div>
                  <div className="mb-4">
                    <textarea class="form-control shadow-none" style={{ resize: 'none' }} rows="3" placeholder='Write your project'></textarea>
                  </div>
                  <div className="mb-4">
                  <button className='btn btn-secondary'>Send Message</button>
                  </div>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>

    </>
  )
}
