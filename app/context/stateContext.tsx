// app/StateContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
    myValue: string;
    setMyValue: React.Dispatch<React.SetStateAction<string>>;
}

const StateContext = createContext<MyContextProps | undefined>(undefined);

export const StateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [myValue, setMyValue] = useState('Initial Value');

    return (
        <StateContext.Provider value={{ myValue, setMyValue }}>
            {children}
        </StateContext.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useMyContext must be used within a StateContextProvider');
    }
    return context;
};
