import React from 'react';
import Headings from '../Headings/Headings';
import './about.css';
import { GrLocation } from 'react-icons/gr';
import { locations } from '../data';

const About = () => {
    return (
        <section className='about' id='about'>
            <Headings detail='About Us' />
            <span>Address:</span><address>
                Gateway Plaza, opposite Kogi State University Anyigba
            </address>

            <p>Branches:</p>
            <ul className="branches">
                {
                    locations && locations.map((location, key) =>
                        <li key={key}><span><GrLocation /></span>{location}</li>)
                }
            </ul>
        </section>
    )
}

export default About