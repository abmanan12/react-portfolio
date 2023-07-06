import React from 'react';

import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

import resume from './resume.pdf'

export default function Hero() {
    return (
        <>
            <div id='hero' className='hero-height'>

                <div className="container d-flex flex-column content-width">
                    <div className="row flex-sm-row-reverse align-items-center">

                        <div className="col-12 col-sm-6 col-md-7 text-center">
                            <img src="assets/myPic.png" className='img picWidth' alt="network_error" />
                        </div>

                        <div className="col-12 col-sm-6 col-md-5 px-3 px-sm-0 mt-5 mt-sm-0">

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

                        </div>

                    </div>

                    <div className="row" style={{ marginTop: '4rem' }}>
                        <div className="col px-3 px-sm-0">
                            <h5 className='mb-0'>My Services</h5>
                            <p className=' mb-0 pt-3 pt-sm-1' style={{ textAlign: 'justify' }}>Web Development,
                                including Front-End & Back-End (Begginer) Development and App Development, including
                                Front-End Development. </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

