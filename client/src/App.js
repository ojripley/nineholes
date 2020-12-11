import React, { useEffect } from 'react';

import { useSocket } from './hooks/useSocket';

import './components/styles/app.css'
import Director from './components/Director';

function App() {

  const { socket, socketOpen } = useSocket();

  useEffect (() => {
    if (socketOpen) {
      socket.on('greeting', (data) => {
        console.log(data);
      });
    }
  }, [socket, socketOpen]);

  return (
    <div className='app'>
      <Director></Director>
    </div>
  );
}

export default App;
