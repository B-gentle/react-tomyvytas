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

            <p>Branches:
                <ul class="branches">
                    {
                        locations && locations.map((location, key)=>
                        <li><span><GrLocation /></span>{location}</li>)
                    }
                </ul>
            </p>
        </section>
    )
}

export default About