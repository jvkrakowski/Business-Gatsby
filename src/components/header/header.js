import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import "./header.scss"
import logo from "../../images/logo.svg"

const Header = ({ siteTitle }) => (

  <header>

  <Helmet>
    <script key="https://code.jquery.com/jquery-3.5.1.min.js" src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous" />
    <scriptke y="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js" />
    <script key="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js" />
  </Helmet>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
        <img src={ logo } alt="placeholder" className="logo"/>
          <h1 className="site-title">
          <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header