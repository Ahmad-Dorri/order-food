import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';

import RootState from './store/types';

const App: React.FC = () => {
  const modalView = useSelector(
    (state: RootState) => state.modal.isModalHidden
  );

  return (
    <>
      {modalView && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
