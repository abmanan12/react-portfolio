import React from 'react'

export default function Skills() {
    return (
        <>
            <div id='skills' className='page-height'>

                <div className="container content-width">
                    <div className="row contentCenter align-items-center">

                        <div className='text-center pb-3 pb-sm-5'>
                            <h3 className='fw-bold mb-0'>Skills</h3>
                            <p>My Technical Level</p>
                        </div>

                        <div className="col-12 col-sm-6 card-align">
                            <div className="card card1 p-3 mx-2">
                                <h5 className="py-3 text-center">Frontend Developer</h5>
                                <div className="row">
                                    <div className="col">
                                        {/* <h6 className='mb-0'><span className='pe-2'><i className="fa-solid fa-circle-check">
                                        </i></span>HTML</h6> */}
                                        <h6 className='mb-0'>HTML</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>Bootstrap</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0'>CSS</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>JavaScript</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0'>React Js</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>React Native</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 card-align mt-3 mt-sm-0">
                            <div className="card card2 p-3">
                                <h5 className="py-3 text-center">Backend Developer</h5>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0'>Firebase</h6>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>NodeJs</h6>
                                        <p>Begginer</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0'>Express</h6>
                                        <p>Begginer</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>Mongodb</h6>
                                        <p>Begginer</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className='mb-0'>Git</h6>
                                        <p>Begginer</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='mb-0'>Github</h6>
                                        <p>Intermediate</p>
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
