import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import "../styles/home.scss"

import Announce from "../components/announcements/announcements"



import { BsArrowRight } from "react-icons/bs"
import { HiChevronRight } from "react-icons/hi"

const IndexPage = ({ data }) => (
 
  <Layout>
    <Seo title="Home" />
    
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div className="box">
          <p>Fusce pulvinar dictum pulvinar. Nullam condimentum odio quis nibh fermentum rhoncus. <BsArrowRight /></p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <img src="https://via.placeholder.com/930x280.png" alt="placeholder"/>
          <div className="overlay-message">
            <div className="item">
              <span className="title">Proin eu nulla</span>
              <br/>
              <span className="title"><Link to="/portfolio">Title</Link></span>
              <HiChevronRight className="icon"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <StaticImage src="https://via.placeholder.com/465x280.png" alt="placeholder" />
          <div className="overlay-message">
            <div className="item">
              <span className="title">Proin eu nulla</span>
              <br/>
              <span className="title"><Link to="/portfolio">Title</Link></span>
              <HiChevronRight className="icon"/>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <StaticImage src="https://via.placeholder.com/465x280.png" alt="placeholder" />
          <div className="overlay-message">
            <div className="item">
              <span className="title">Proin eu nulla</span>
              <br/>
              <span className="title"><Link to="/portfolio">Title</Link></span>
              <HiChevronRight className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="row">

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <h2>From the Blog</h2>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          {
            data.allMdx.nodes.map((node) => (
              <article key={node.id} className="home">
                <h3><Link to={ `/blog/${node.slug}` } >{node.frontmatter.title}</Link></h3>
                <p>{node.frontmatter.date}</p>
              </article>
            ))
          }
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <Announce />
        </div>
      </div>    

    </div>


  </Layout>
)

export const postQuery = graphql`
{
  allMdx(
    sort: {order: DESC, fields: frontmatter___date}
    filter: {frontmatter: {area: {ne: "announcement"}}}
    limit: 4
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD YYYY")
        description
        title
      }
      id
      slug
    }
    distinct(field: frontmatter___path)
  }
}

`

export default IndexPage