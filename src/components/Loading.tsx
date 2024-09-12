import React, { useEffect, useState } from 'react'

const Loading = () => {
  const [load, setLoad] = useState(0);
  useEffect(()=> {
    
  },[load]);

  return (
    <div className='w-100vw h-screen bg-blue-300 relative'>
        <div className="absolute bottom-0 bg-blue-600 w-[100vw]" style={{height:  `${load}%`}}>
            Loading
        </div>
    </div>
  )
}

export default Loading