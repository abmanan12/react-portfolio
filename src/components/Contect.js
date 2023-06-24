import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

export default function Contect() {
  return (
    <>

      <div id='contect' className='page-height'>

        <div className="container content-width">
          <div className="row">

            <div className='text-center pb-3 pb-sm-5'>
              <h3 className='fw-bold mb-0'>Contact Me</h3>
              <p>Get in touch</p>
            </div>

            <div className="col-12 col-sm-6 card-align">
              <h5 className='text-center pb-2'>Talk to me</h5>

              <div className="row">
                <div className="col">
                  <div className="card mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><AiOutlineMail /></p>
                    <h6 className='mb-0 fw-bold'>Gmail</h6>
                    <p className='mb-1'>abdulmanankam</p>
                    <p className='mb-0 write'><a href="mailto:abdulmanankam@gmail.com">write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="card my-3 mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><FaWhatsapp /></p>
                    <h6 className='mb-0 fw-bold'>Whatsapp</h6>
                    <p className='mb-1'>+92 302 4946737</p>
                    <p className='mb-0 write'><a href="https://api.whatsapp.com/send?phone=923024946737">write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="card mx-sm-3 mx-md-4 mx-lg-4 p-2 text-center card-size">
                    <p className='mb-2 contect-icon'><RiMessengerLine /></p>
                    <h6 className='mb-0 fw-bold'>Messenger</h6>
                    <p className='mb-1'>amanan.kamboh.7</p>
                    <p className='mb-0 write'><a href='https://m.me/amanan.kamboh.7'>write me
                      <span><AiOutlineArrowRight /></span></a></p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 col-sm-6 mt-5 mt-sm-0">
              <h5 className='text-center pb-2'>Write me your project</h5>

              <div className="row">
                <div className="col form-width">
                  <form>
                    <div className="mb-4">
                      <input type="text" className="form-control shadow-none input-width py-2" placeholder="Insert your name" />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control shadow-none input-width py-2" placeholder="Insert your email" />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control shadow-none input-width" style={{ resize: 'none' }} rows="4"
                        placeholder='Write your project'></textarea>
                    </div>
                    <div className="mb-4 ms-1">
                      <button className='btn btn-secondary btn-sm btn-cv'>Send Message
                        <span><HiOutlineDocumentDuplicate /></span></button>
                    </div>
                  </form>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>

    </>
  )
}
