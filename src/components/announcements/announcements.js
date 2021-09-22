import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../../styles/announce.scss"

const Announce = () => {
    const data = useStaticQuery(graphql`
        query announce {
            mdx(frontmatter: {area: {eq: "announcement"}}) {
            excerpt
            slug
            frontmatter {
                title
                description
                date
            }
            }
        }
    `)

    return (

        <div>
                    <h1>{ data.mdx.frontmatter.title }</h1>
                    <p>{ data.mdx.frontmatter.date }</p>
                    <p>{ data.mdx.frontmatter.description }</p>
                    <span className="read-more"><Link to={ data.mdx.slug }>Read More</Link></span>

        </div>
    )
}

export default Announce