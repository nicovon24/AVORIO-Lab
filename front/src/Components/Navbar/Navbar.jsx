import React from 'react';
import { useLocation } from 'react-router-dom';
import AddButton from '../Buttons/AddButton';
import CartButton from '../Buttons/CartButton';
import BackButton from '../Buttons/BackButton';

const Navbar = () => {
  const location = useLocation();

  // Define the paths where you want to hide certain buttons
  const hideCartButtonPaths = ['/login', '/signup'];

  return (
    <nav className="flex justify-between items-center gap-4 pb-4 mb-4 border-b-2 w-full">
      <BackButton />
      {location.pathname === '/' && <AddButton />}
      <CartButton />
    </nav>
  );
};

export default Navbar;
