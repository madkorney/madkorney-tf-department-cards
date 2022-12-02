import React from 'react';

import { TabHeader, DepartmentCardsList } from './components';

import './App.scss';

function App() {
  return (
    <div className="App-container">
      <TabHeader />
      <DepartmentCardsList />
    </div>
  );
}

export default App;
