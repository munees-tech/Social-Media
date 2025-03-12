
import { useContext } from 'react';
import DataContexts from '../contexts/DataContext';

const Header = () => {
  const {title,width } = useContext(DataContexts);
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? Mobile
        : width < 992 ? Tablet
          : LapTop}
    </header>
  )
}

export default Header