import { useEffect, useState } from 'react'
import type { User } from '../types/type'

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => { console.log(err) })
  }, [])

  return { users, setUsers }
}
