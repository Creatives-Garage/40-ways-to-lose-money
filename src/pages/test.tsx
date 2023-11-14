import React from 'react'

const Test = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Audio player</p>
          <audio src='/sounds/test.mp3' controls/>
    </div>
  )
}

export default Test