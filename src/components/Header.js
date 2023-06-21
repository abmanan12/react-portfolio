import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light top-0 sticky-top bg-light">
                <div className="container">

                    <a className="navbar-brand" href="#">Abdul Manan</a>

                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
