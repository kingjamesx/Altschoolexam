import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error-box'>
        <h1 className='error-box__title'>404</h1>
          <p className='error-box__p'>The link you clicked may be broken or the page may have been removed or renamed.</p>
          <Link to='/' className='error-box__btn'>&larr; Go back</Link>
    </div>
  )
}

export default Error