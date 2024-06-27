import React from 'react'

const ForecastCards = ({hour}) => {
  return (
    <div className='border-r p-5 m-5'>
        <p>{hour.time}</p>
        <p>{hour.temp_c}</p>
    </div>
  )
}

export default ForecastCards