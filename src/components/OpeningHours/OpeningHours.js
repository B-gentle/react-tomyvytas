import React from 'react';
import './openingHours.css';
import { AiOutlineClockCircle } from 'react-icons/ai'
import Headings from '../Headings/Headings';

const OpeningHours = () => {
    return (
        <section>
            <Headings detail='Opening Hours' />
            <div className="OT">
                <div>
                    <p>Monday - Friday </p>
                    <p style={{ textAlign: 'center', fontSize: '2rem' }}><AiOutlineClockCircle /></p>
                   <p> 09:00am - 05:00pm
                </p>
            </div>
            <div>
                <p> Saturday </p>
                <p style={{ textAlign: 'center', fontSize: '2rem' }}><AiOutlineClockCircle /></p>
                <p>10:00am - 04:00pm</p>
            </div>
        </div>
    </section >
  )
}

export default OpeningHours