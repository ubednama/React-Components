import React from 'react'

const Smiley = () => {
  return (
    <div>
      <h3>Smiley</h3>
      <svg>
        <path
            d="M25,5 L25,15
                M75,5 L75,15
                M15,45 C20,60 80,60 85,45"
            stroke = "red"
            strokeWidth="4"
            fill='none'
            />
      </svg>
    </div>
  )
}

export default Smiley
