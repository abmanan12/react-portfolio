import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <>
            <div className='bg-dark text-light py-2 mt-5 text-center'>

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
