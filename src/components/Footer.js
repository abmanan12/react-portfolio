import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <>
            <div className='py-3 mt-5 text-center border-top'>

            <div className="container">
                <div className="row">
                    <div className="col">
                        &copy; copyright {year}. All rights reserved.
                    </div>
                </div>
            </div>

            </div>

        </>
    )
}
