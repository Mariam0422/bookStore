import { useState, useEffect } from 'react';
import CardMain from '../CardMain/CardMain';
import './index.css'

const Main = ({data}) => { 
 
  return (
    <div className='mainSection'> 
    {data && data.length !== 0 ?  <CardMain data={data}/> :
    <p>Nothing found</p>
    }
      
    </div>
  )
}

export default Main