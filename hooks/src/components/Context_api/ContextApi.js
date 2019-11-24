import React from 'react'
const userContext = React.createContext()
const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

const channelContext = React.createContext()
const ChannelProvider  = channelContext.Provider
const ChannelConsumer = channelContext.Consumer

export  {UserProvider,UserConsumer,ChannelConsumer,ChannelProvider}
export {userContext,channelContext}

