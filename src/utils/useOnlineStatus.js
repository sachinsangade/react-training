import React, { useState } from 'react'

// Custom Hook to check if user is connected to internet.
const useOnlineStatus = () => {

    const [ isOnline, setIsOnline ] = useState(true)

    window.addEventListener('offline', () => {
        setIsOnline(false)
    })

    window.addEventListener('online', () => {
        setIsOnline(true)
    })

    return isOnline
  
}

export default useOnlineStatus