import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Counter from '../../components/Counter'

export default function UserDetail() {
  const {userId} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <h1>This is user details page</h1>
      <p>User ID = {userId}</p>
      <p>User Name = {searchParams.get('name')}</p>
      <p>User Age = {searchParams.get('age')}</p>

      <button onClick={() => setSearchParams({name: 'raj'})}>Set Name as Raj</button>
      <button onClick={() => setSearchParams({age: 20})}>Set Age as 20</button>

      <Counter />
    </div>
  )
}
