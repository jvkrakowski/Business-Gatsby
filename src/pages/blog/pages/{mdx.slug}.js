import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../../components/layout/layout'
import PropTypes from "prop-types"
// import { StaticImage } from 'gatsby-plugin-image'

// import TagDecorator from '../../components/link-tag/link-tag'

import { DiscussionEmbed } from "disqus-react"

import "../../styles/blog.scss"

const BlogPost = ( { data, slug } ) => {

  const disqusConfig = {
    shortname: process.env.business-gatsby,
    config: { identifier: slug },
  }

  return (
   
    <Layout>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="box">
            <header className="post-header">
                <span className="post-date">{data.mdx.frontmatter.date}</span>
                <h2 className="post-page-title">{ data.mdx.frontmatter.title }</h2>
                {/* <span> { data.mdx.frontmatter.tags.join(", ") }</span> */}
              
            </header>
              
        
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>

            <DiscussionEmbed { ...disqusConfig } />

          </div>
        </div>
      </div> 
    </Layout>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}




export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        description
      }
      body
    }
  }
`
export default BlogPost