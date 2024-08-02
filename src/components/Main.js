import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

const Main = () => {
  return (
    <div>
        <Header/>
        <div className='container'>
          <Body/>
        </div>
    </div>
  )
}

export default Main