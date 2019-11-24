import React from 'react';
import {UserConsumer,ChannelConsumer} from './ContextApi'

function ComponentC(props) {
    return (
        <div>
            <UserConsumer>
                {
                    user=>{
                        return <ChannelConsumer>
                            {
                                chan => {
                                    return <h1>user {user} channel {chan}</h1>
                                }
                            }
                        </ChannelConsumer>
                    }
                }
            </UserConsumer>
        </div>
    );
}

export default ComponentC;