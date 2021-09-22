import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

const AboutPage = () => (

  <Layout>
    <Seo title="About" />
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <div className="box">
        <h1>Aenean non scelerisque sem. <br/> Aenean sagittis eleifend convallis.</h1>
        <p>Nunc id tellus nec erat luctus tempor. Pellentesque faucibus libero tincidunt convallis pellentesque. Maecenas ac facilisis risus. Donec luctus mi at auctor tempus. Etiam sollicitudin sit amet tortor quis dignissim. Pellentesque imperdiet pretium pellentesque. Phasellus cursus dictum justo sit amet auctor. Phasellus non malesuada lorem. Vestibulum porttitor magna sit amet justo pretium, eu iaculis quam lobortis.</p>

        <h2>Etiam vel tincidunt leo</h2>

        <p>Donec sed purus et nulla condimentum ullamcorper. Nunc quis condimentum nulla. Vestibulum venenatis, nibh eu auctor mollis, neque nisl tincidunt eros, non fermentum felis orci sed dui. In porttitor lorem ac sapien placerat luctus. Morbi nisl ipsum, commodo non velit dictum, finibus dapibus odio. Etiam vel tincidunt leo. Vivamus mi dolor, suscipit at maximus sit amet, facilisis quis sem.</p>
 
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="box">
          <StaticImage src="https://via.placeholder.com/375x470.png" alt="placeholder"/>
        </div>
      </div>


      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <h2>Etiam vel tincidunt leo</h2>
          <p>Suspendisse luctus felis tortor, ut porta est faucibus sit amet. Sed pulvinar diam id sapien mollis, nec semper turpis ornare. Duis at accumsan metus. Sed lobortis metus nec sagittis vehicula. Nam nec quam ante. Vestibulum ac consectetur nunc, consequat porttitor ex. Nulla facilisi. Mauris eu hendrerit massa. Nullam pulvinar ante a nisl tempus venenatis. Aenean efficitur in nibh venenatis pharetra. </p>
          <br />
          <dl className="link-list">
            <dt><span className="circle">1</span>Timeline Display</dt>
            <dd>Timeline display layout for tracking history.</dd>
            <dt><span className="circle">2</span><Link to="/faqs">Accordion and Tabs</Link></dt>
            <dd>Suitable for FAQs and portfolio sorting.</dd>
          </dl>
        </div>

      </div>
    </div>
  </Layout>

)


export default AboutPage