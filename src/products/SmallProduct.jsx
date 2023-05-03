import React from 'react'

function SmallProduct({ product }) {
    const { name, price } = product;
  return (
    <div>{name} - {price}</div>
  )
}

export default SmallProduct