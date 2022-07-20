import React from 'react'
import Related from '../../components/related';

export default function id(props) {
  return (
    <div>
    <div className="card">
        <div className="card-title">{props.data.title}</div>
        <div className="card-body">{props.data.body}</div>
    </div>
    <Related sendData={props.allData}/>
    </div>
  )
}
export const getServerSideProps =async (ctx)=>{
    const {params} = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    const allRes = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const allData = await allRes.json();
    return{
        props:{
         data, allData
        }
    }
}