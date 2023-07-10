import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';

export default function Projects() {
    return (
        <>
            <div id='projects' className='page-height'>

                <div className='text-center pb-2 pb-sm-4'>
                    <h3 className='fw-bold mb-0'>Projects</h3>
                    <p>Most recent work</p>
                </div>

                <div className='mb-3'><Project1 /></div>

                <div><Project2 /></div>

            </div>
        </>
    );
}

