import React from 'react';
import { useLocation } from 'react-router-dom';
import AddButton from '../Buttons/AddButton';
import CartButton from '../Buttons/CartButton';
import BackButton from '../Buttons/BackButton';
import LogoutButton from '../Buttons/LogoutButton';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center gap-4 pb-4 mb-4 border-b-2 w-full">
      <BackButton />
      <CartButton />
      {location.pathname === '/' && <AddButton />}
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
