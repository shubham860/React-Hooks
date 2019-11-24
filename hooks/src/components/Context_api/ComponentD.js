import React,{useContext} from 'react';
import ComponentF from './ComponentF';
import  {userContext,channelContext} from './ContextApi'

function ComponentD(props) {
    const user = useContext(userContext);
    const channel = useContext(channelContext);
    return (
            <div>
            {user}-{channel}
            </div>
       );
}

export default ComponentD;