import React from 'react'
import '../Footer/Footer.css'
import insta from '../../assets/images/Vector.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer_heading">
                <h1>Beyond Glass Barriers</h1>
                <div className="line"></div>
            </div>
            <div className="links">
                <div className="link">
                    <img src={insta} alt="" />
                    <p>ieeesbgecpalakkad</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Footer