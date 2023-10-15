import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/users/1'>Goto User 1</Link>
        </li>
        <li>
          <Link to='/users/2'>Goto User 2</Link>
        </li>
      </ul>
    </div>
  )
}
