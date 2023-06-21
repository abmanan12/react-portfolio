import React from 'react';

export default function Hero() {
    return (
        <>
            <div id='hero' className='py-5'>

                <div className="container contentCenter content-width">
                    <div className="row flex-sm-row-reverse align-items-center">

                        <div className="col-12 col-sm-6 text-center">
                            <img src="assets/myPic.png" className='img picWidth' alt="network_error" />
                        </div>

                        <div className="col-12 col-sm-6 px-4 px-sm-0">

                            <h3>Front-End React Developer &#128075;</h3>
                            <p style={{textAlign: 'justify'}}>Hi, I'm Abdul Manan. I'm a Front-end React Developer and very passionate and dedicated to my work.</p>
                            <div className='d-flex gap-2'>
                                <a href="https://github.com/abmanan12"><i className="fa-brands fa-square-github"></i></a>
                                <a href="https://www.linkedin.com/in/ab-manan/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/ab_manan12/"><i className="fa-brands fa-square-instagram"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

