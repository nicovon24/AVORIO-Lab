import React from 'react'
import AddButton from '../Buttons/AddButton'
import CartButton from '../Buttons/CartButton'
import BackButton from '../Buttons/BackButton'

const Navbar = () => {
  return (
    <nav class="flex justify-between items-center gap-4 pb-4 mb-4 border-b-2 w-full">
      <BackButton/>
      <AddButton/>
      <CartButton/>
    </nav>
  )
}

export default Navbar