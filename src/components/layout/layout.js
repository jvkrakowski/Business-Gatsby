/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "../header/header"
 import Footer from "../footer/footer"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           author
         }
       }
     }
   `)
 
   return (
       
       <div className="wrapper" >
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
         <main>{children}</main>
         
         <Footer></Footer>
       </div>
    
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout