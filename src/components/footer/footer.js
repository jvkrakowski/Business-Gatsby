import * as React from "react"
import { Link } from "gatsby"

import { RiFacebookCircleFill, RiTwitterFill, RiBehanceFill, RiCopyrightLine } from "react-icons/ri"
import "./footer.scss"

import logo from "../../images/logo.svg"

const Footer = () => (

    <footer>
      <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="footer">

          <div className="logo-area">
              <img src={ logo } alt="placeholder" className="footer-logo" />
              <h3 className="footer-title">Business Gatsby</h3>
          </div> 
        

          <div className="social">
              <RiFacebookCircleFill />
              <RiTwitterFill />
              <RiBehanceFill />
            </div>
     
        
            </div>

      </div>



      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="box">
            <p>box</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="box">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="box">
            <p>2020 <RiCopyrightLine /> NRM | All Rights Reserved <br/> (000) 123 - 4567 | hello@business.com </p>
          </div>
        </div>

      </div>
    </footer>

)

export default Footer