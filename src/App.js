import React from 'react';

// Context
import CategoryProvider from './context/CategoryContext';
import RectasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

// Components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ListRecetas from './components/ListRecetas/ListRecetas';

function App() {
  return (
    <CategoryProvider>
      <RectasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecetas />
          </div>
        </ModalProvider>
      </RectasProvider>
    </CategoryProvider>
  );
}

export default App;
