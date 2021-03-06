import React, { useEffect } from 'react';

import { useSocket } from './hooks/useSocket';

import './components/styles/app.css'
import Director from './components/Director';

function App() {

  const { socket, socketOpen } = useSocket();

  const requestGame = function(options) {
    console.log('requesting game');
    if(socketOpen) {
      socket.emit('requestGame', {options: options});
    }
  };

  useEffect (() => {
    if (socketOpen) {
      socket.on('greeting', (data) => {
        console.log(data);
      });

      socket.on('serverError', (data) => {
        console.log(data);
      });

      return () => {
        socket.off('greeting');
        socket.off('serverError');
      }
    }

  }, [socket, socketOpen]);

  return (
    <div className='app'>
      <Director></Director>

      <div onClick={() => {requestGame({gameType: 'golf', opponentType: 'random'})}}>Find Game</div>
    </div>
  );
}

export default App;
