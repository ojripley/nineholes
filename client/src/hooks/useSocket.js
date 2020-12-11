import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = () => {
  const [socket, setSocket] = useState(null);
  const [socketOpen, setSocketOpen] = useState(false);

  // for local
  const server = '192.168.1.207:8080';
  // const server = 'localhost:8080';
  
  useEffect (() => {
    // socket transports need to be specified as websocket to avoid http as inital handshake
    // results in cors issue otherwise
    const socketConnection = io(server, { transports: ['websocket'] });

    setSocket(socketConnection);
    setSocketOpen(true);

    return () => {
      socketConnection.close(server);
    }
  }, [server]);

  return {
    socket, 
    socketOpen
  };
};
