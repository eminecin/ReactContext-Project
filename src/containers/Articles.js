import React,{useContext} from "react"
import Article from '../components/Article/Article'
import {ArticleContext} from '../context/articleContext'


const Articles = () => {
  const {articles} = useContent(ArticleContext)
  return (
    <div>
      {articles.map(item=><Article item={item}/>)}
    </div>
  )
}

export default Articles