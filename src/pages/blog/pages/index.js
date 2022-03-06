import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout/layout"
import Announce from "../../components/announcements/announcements"
import Seo from "../../components/seo/seo"



import "../../styles/blog.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box announcement">
              <Announce />
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div className="box">
                
                  {
                    data.allMdx.nodes.map((node) => (
                      <article key={node.id}>
                        <h2><Link to={ `/blog/${node.slug}` } >{node.frontmatter.title}</Link></h2>
                        <p>{node.frontmatter.date}</p>

                        <p>{ node.frontmatter.description }</p>
                      </article>
                    ))
                  }

              
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box">

            <h3>Tags</h3>
            <ul>      
              { data.allMdx.group.map(tags => (
                    <li><Link to={`/tags/${tags.fieldValue}/`} >{tags.fieldValue} ({tags.totalCount})</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </Layout>
)
      }

export const postQuery = graphql`
query posts {
  allMdx(
    sort: {order: DESC, fields: frontmatter___date}
    filter: {frontmatter: {area: {ne: "announcement" }}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MM DD YY")
        description
        tags
        title
      }
      slug
    }
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`

export default BlogPage
