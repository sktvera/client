import React from 'react'

const InitPage = ({setPage}) => {
  return (
    <div>

        <p>initPage</p>
        <button onClick={()=>setPage(1)}></button>
    
    </div>
    
  )
}

export default InitPage