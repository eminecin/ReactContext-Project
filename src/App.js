import React from "react"
import Articles from "./containers/Articles"
import AddArticle from "./components/AddArticle/AddArticle"
import ArticleContext from './context/articleContext'
function App() {
  return (
    <div>
      <ArticleContext>
      <AddArticle />
      <Articles />
      </ArticleContext>
    </div>
  )
}
export default App
