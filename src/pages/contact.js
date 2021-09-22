import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import { GrLocation } from "react-icons/gr"
import { FiPhone } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <div className="box">
          
            <address>
              <p><GrLocation/> P.O Box 982 Mockup St Somewhere PA</p>
              <p><FiPhone/>1 (888) 123 - 4567</p>
              <p><HiOutlineMail /> hello@business.com</p>
            </address>
        

          <form method="post" action="https://getform.io/f/32ad88a2-f813-42c4-9972-3d8fb280b264" className="contact">
            <label>
            Email
            <input type="email" name="email" />
            </label>
            <label>
            Name
            <input type="text" name="name" />
            </label>
            <label>
            Message
            <textarea type="text" name="message" />
            </label>
          </form>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="box">
          <h3>Important!</h3>
          <p>Suspendisse luctus felis tortor, ut porta est faucibus sit amet. Sed pulvinar diam id sapien mollis, nec semper turpis ornare. Duis at accumsan metus. </p>

          <p>Aenean non scelerisque sem. Aenean sagittis eleifend convallis. Pellentesque viverra nibh ac pretium imperdiet. Duis vitae congue massa. Duis rutrum commodo nisl, vel lacinia lorem mattis vitae.</p>
        </div>
        </div>    
    </div>
  </Layout>
)

export default ContactPage