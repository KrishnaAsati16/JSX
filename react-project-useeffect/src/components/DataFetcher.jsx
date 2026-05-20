import { useState } from 'react'
import { useEffect } from 'react'

function DataFetcher(){
    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(() =>{
        fetch('hhtps://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data)
            setLoading(false)
        }) 
     },[])

     // it will run only on 1s render
     return(
        <div>
            {loading ? (
                <h1>Loading....</h1>
            ) : (
                <ul>
                    {data.map(post=>(
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                )}
        </div>
     )
}

export default DataFetcher