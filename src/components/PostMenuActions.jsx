import React from 'react'

const PostMenuActions = () => {
  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>
        Actions
      </h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 48 48'
          width='20px'
          height='20px'
        >
          <path
            d='M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z'
            stroke='white'
            strokeWidth='2'
          />
        </svg>
        <span>
          Save this post
        </span>
      </div>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill="red"
        >
          <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
        </svg>
        <span>
          Delete this post
        </span>
      </div>
    </div>
  )
}

export default PostMenuActions
