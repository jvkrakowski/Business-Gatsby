import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout/layout"
import PropTypes from "prop-types"


const TagList = ({ data }) => {

    return (
        <Layout>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="box">
                <h3>There are {data.allMdx.totalCount} results that match your query.</h3>
                   
                    { data.allMdx.edges.map( ({ node }) => {
                    return (
                     
                        <p><Link to={`/blog/${node.slug}`}>{ node.frontmatter.title }</Link></p>
                      
                    )
                  }
                  )}
                
                <p><Link to="/blog">All tags</Link></p>
              </div>
            </div>
          </div>
        </Layout>
    )
}

TagList.propTypes = {
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

export default TagList;

export const pageQuery = graphql`
query($tags: String) {
  allMdx(
    limit: 2000
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {tags: {eq: $tags }}}
  ) {
    totalCount
    edges {
      node {
        slug
        frontmatter {
          title
          tags
        }
      }
    }
  }
}


`;