import React, { useState, useEffect } from 'react'

const useProductDetails = (productId) => {

const [ productDetails, setProductDetails ] = useState(null)

useEffect( () => {
    fetchProductDetails()
}, [])

const fetchProductDetails = async() => {
    const data = await fetch('https://dummyjson.com/products/' + productId)
    const jsonData = await data.json()
    setProductDetails(jsonData)
}

  return productDetails
}

export default useProductDetails