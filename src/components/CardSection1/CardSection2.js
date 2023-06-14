import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/section2.css'

export default function CardSection2(props) {
    let styleobject = { backgroundImage: props.backgImgUrl }
    return (
        <Link
            style={styleobject}
            className="section2" to={props.routeTo}>
            <h2>{props.projectType}</h2>
            
        </Link>

    )
}
