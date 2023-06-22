import React from 'react'

interface Props {
  // 2 option pass an array or a count
  cartItemsCount: number;

}

const NavBar = ({cartItemsCount}: Props) => {
  return (
    <div>NavBar {cartItemsCount}</div>
  )
}

export default NavBar
