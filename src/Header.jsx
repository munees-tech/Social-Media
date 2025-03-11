import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

import { useContext } from 'react';
import DataContexts from '../contexts/DataContext';

const Header = () => {
  const {title,width } = useContext(DataContexts);
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header