import React, { useEffect } from 'react'
import { useFetchFriends } from './hooks'

const FriendsList: React.FC = () => {
  useFetchFriends()

  return  (
    <div className="friends">
      
    </div>
  )
}
export default FriendsList