import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <>
            <div className='py-3 mt-5 text-center border-top footer'>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            &copy; copyright {year}. Abdul Manan
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
