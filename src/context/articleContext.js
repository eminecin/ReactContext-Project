import React,{useReducer, createContext} from 'react'
import {reducer} from './reducer'

const initialState = [
    { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ]

export default function ArticleProvider(props) {
    const [articles,dispatch] = useReducer(reducer,initialState)
    return (
            <ArticleContext.Provider value={articles,dispatch}> 
            {props.children}
            </ArticleContext.Provider>
    )
}


export const ArticleContext = createContext()