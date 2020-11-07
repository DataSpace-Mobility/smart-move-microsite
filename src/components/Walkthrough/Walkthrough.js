import React from 'react'
import codewalk from '../../images/codewalk.png';
import Steps from './Steps/Steps';
const Walkthrough = () => {
    return (
        <section className="section2">
            <h1>Challenge Walkthrough</h1>
            <img src={codewalk} alt="challenge walkthrough" />
            <div>
                <Steps/>
            </div>
        </section>
    )
}

export default Walkthrough;
