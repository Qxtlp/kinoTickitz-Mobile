import React from 'react';
import MainstackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import stores from './src/stores';

function App() {
  return (
    <Provider store={stores}>
      <MainstackNavigator />
    </Provider>
  );
}

export default App;
