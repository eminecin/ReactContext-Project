import React from 'react'
import './Article.css'

export default function Article(props) {
    
    console.log(props)
    return (
        <div className="article">
            <h1>{props.item.title}</h1>
            <p>{props.item.body}</p>
            <p></p>
        </div>
    )
}
