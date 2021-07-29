import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastsContainer from '../iu/components/ToastsContainer';

interface ToatsContestDataProps {
  addToasts(message: Omit<ToastsMessages, 'id'>): void;
  removeToasts(id:string): void;
}

export interface ToastsMessages {
  id: string;
  type?: 'error' | 'sucess' | 'info';
  title: string;
  description: string;
}

const ToastsContext = createContext<ToatsContestDataProps>(
  {} as ToatsContestDataProps
);

export const ToastsProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastsMessages[]>([]);

  const addToasts = useCallback(
    ({ title, description, type }: Omit<ToastsMessages, 'id'>) => {
      const id = uuid();

      const toasts = {
        id,
        title,
        description,
        type,
      };

      setMessages((oldMessagens) => [...oldMessagens, toasts]);
    },
    []
  );

  const removeToasts = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastsContext.Provider value={{ addToasts, removeToasts }}>
      {children}
      <ToastsContainer messages={messages} />
    </ToastsContext.Provider>
  );
};

export function useToasts(): ToatsContestDataProps {
  const context = useContext(ToastsContext);

  if (!context) {
    throw new Error('useToasts must be used within a ToastsProvider');
  }

  return context;
}
