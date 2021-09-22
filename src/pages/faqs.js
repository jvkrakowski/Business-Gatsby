import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import "../styles/faq.scss"

const FAQs = () => (
    <Layout>
        <Seo title="FAQs" />
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="box">

                <nav class="tab-nav">
                    <a id="1">Tab 1</a>
                    <a id="2">Tab 2</a>
                    <a id="3">Tab 3</a>
                    <a id="4">Tab 4</a>
                </nav> 


                <div class="tab-panel" id="1-panel">
                    <dl className="questions">
                        <dt>Pellentesque viverra nibh ac pretium imperdiet?</dt>
                            <dd>Suspendisse luctus felis tortor, ut porta est faucibus sit amet. Sed pulvinar diam id sapien mollis, nec semper turpis ornare. Duis at accumsan metus. Sed lobortis metus nec sagittis vehicula. Nam nec quam ante. Vestibulum ac consectetur nunc, consequat porttitor ex. Nulla facilisi. Mauris eu hendrerit massa. Nullam pulvinar ante a nisl tempus venenatis. Aenean efficitur in nibh venenatis pharetra.</dd>
                        <dt>Hurabitur at lacinia enim?</dt>
                            <dd>Suspendisse luctus felis tortor, ut porta est faucibus sit amet. Sed pulvinar diam id sapien mollis, nec semper turpis ornare. Duis at accumsan metus. Sed lobortis metus nec sagittis vehicula. Nam nec quam ante. Vestibulum ac consectetur nunc, consequat porttitor ex. Nulla facilisi. Mauris eu hendrerit massa. Nullam pulvinar ante a nisl tempus venenatis. Aenean efficitur in nibh venenatis pharetra.</dd>
                    </dl>
                </div>

                <div class="tab-panel" id="2-panel">
                    <h2>Tab 2</h2>
                    <p>Curabitur at lacinia enim. Nam vulputate ante vel iaculis auctor. Curabitur dictum in nulla eu sollicitudin. Fusce pretium felis odio, in facilisis ipsum scelerisque eget. Suspendisse potenti. Praesent congue metus mi, sed ultrices justo dapibus ut. Cras ornare justo ante, sit amet tempus arcu facilisis eu. Nam a magna dictum magna vulputate semper nec in neque. Sed vel mauris mauris. Vestibulum ultrices ac neque vitae lacinia. Sed imperdiet ullamcorper blandit. Quisque risus purus, posuere ut orci vel, ultricies eleifend eros. Nulla facilisi. Mauris ac elit mollis, facilisis quam sit amet, porttitor elit.</p>
                </div>

                <div class="tab-panel" id="3-panel">
                    <h2>Tab 3</h2>
                    <p>Cras cursus pulvinar sapien. Nulla ac erat ligula. In vitae turpis sit amet diam faucibus luctus tempor sed magna. Nulla volutpat diam vitae sem placerat elementum. Vivamus in magna quam. Sed posuere augue sit amet nisl gravida, maximus rhoncus elit congue. Mauris eu bibendum elit. Nullam sem est, pellentesque tristique consectetur faucibus, euismod in nisl. Donec at dolor vel odio tristique elementum et id urna. Maecenas non enim quis ante lacinia vehicula.</p>
                </div>

                <div class="tab-panel" id="4-panel">
                    <h2>Tab 4</h2>
                    <p>Aenean blandit metus id elit consequat molestie. Fusce mollis interdum accumsan. Quisque felis urna, mollis eget pulvinar ut, pulvinar id arcu. Ut dictum urna in ante posuere, vitae pulvinar sapien blandit. Sed tellus sapien, ullamcorper commodo metus ac, tincidunt dictum urna. Nulla volutpat venenatis est, eu viverra lorem bibendum quis. Nullam vulputate pellentesque odio sollicitudin placerat. Curabitur lacinia tortor erat, ac faucibus nunc efficitur sed. Duis sit amet magna a tortor commodo lobortis. Morbi viverra urna lobortis felis aliquet, eget consequat magna fringilla.</p>
                </div>

                </div>
            </div>
        </div>
    </Layout>
)

export default FAQs