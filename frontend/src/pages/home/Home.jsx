import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import Title from './Title'

const Home = () => {
  return (
    <div>
      <Title/>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden mt-5 bg-gray-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-0' >
      <Sidebar />
      <MessageContainer />
    </div>
    </div>
    
  )
}

export default Home