import React,{useEffect,useState} from 'react';
import axios from 'axios';

function FetchingData(props) {
    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    const [btnId,setbtnId] = useState(1);

    // const handler = () => {
    //     setbtnId(id)
    // }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
            .then(res=>{
                console.log(res.data);
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[btnId])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="submit" onClick={()=>{setbtnId(id)}}>Fetch</button>
            <div>{post.title}</div>
        </div>
    );
}

export default FetchingData;