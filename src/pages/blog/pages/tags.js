import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout/layout"




const TagsPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">

      <div className="blog-list">


      {data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            
              <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue} ({tag.totalCount})</Link> 
            
          </li>
        ))}
    
      </div>

    </Layout>

)
      }

export const TagsQuery = graphql`
 {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage