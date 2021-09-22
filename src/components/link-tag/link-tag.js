import React from "react"
import { Link } from "gatsby"

const TagDecorator = props => {
    return (
        <span>
            <Link to={`/tags/${props.tag}`}>{props.tag}</Link>
        </span> 
    );
}

export default TagDecorator;