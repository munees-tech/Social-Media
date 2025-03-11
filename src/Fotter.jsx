import React from 'react'

const Fotter = () => {
  const year = new Date()
  return (
    <footer className='Footer'>CopyWrite © {year.getFullYear()}</footer>
  )
}

export default Fotter