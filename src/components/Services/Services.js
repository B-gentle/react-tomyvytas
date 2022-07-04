import React from 'react';
import './service.css';
import Headings from '../Headings/Headings';
import drinks from '../data'

const Services = () => {
  return (
    <section className='services' id='services'>
        <Headings detail='Our Services' />
        <p>We specialize on all kinds of brewery drinks such as</p>
        <ul>
{drinks && drinks.map((drink, id)=>
<li key={id}>
    <img src={drink.img} alt='' className='drinks'/>
    <p>{drink.label}</p>
</li>
)}
        </ul>

    </section>
  )
}

export default Services