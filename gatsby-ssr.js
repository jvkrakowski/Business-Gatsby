import React from 'react'

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
    <script 
    key="https://code.jquery.com/jquery-3.5.1.min.js"
    src="https://code.jquery.com/jquery-3.5.1.min.js" 
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
    crossOrigin="anonymous" />,
    <script 
    key="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js"
    src="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js" />,
    <script
    key="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js"
    src="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js" />,
  ])
}