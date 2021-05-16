import React,{useState,useContext} from "react";
import "./AddArticle.css";
import {ArticleContext} from '../../context/articleContext'

const AddArticle = () => {
  const [article,setnewArticle] = useState({})
  const {dispatch}=useContext(ArticleContext)
  const handleArticleData = (e)=>{
    setnewArticle({...article,[e.target.name]:e.target.value})
  }
  const addNewArticle=()=>{
    e.preventDefault()
    dispatch({type:"ADD_ARTICLE",article})
  }
  return (
    <form className="add-article">
      <input onChange={handleArticleData}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input onChange={handleArticleData}
        type="text"
        id="body"
        placeholder="Body"
      />
      <button onClick={addNewArticle}>Add article</button>
    </form>
  );
};
export default AddArticle;
