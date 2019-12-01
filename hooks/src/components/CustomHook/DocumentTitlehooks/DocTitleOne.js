import React ,{useState,useEffect} from 'react';
import UseDocumentTitle from "./useDocumentTitle";

function DocTitleOne(props) {
    const [count,setCount] = useState(0);

    UseDocumentTitle(count);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increase Count - {count}</button>
        </div>
    );
}

export default DocTitleOne;