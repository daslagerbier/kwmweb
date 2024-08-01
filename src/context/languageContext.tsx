'use client'
import { createContext, useContext } from 'react';

interface LangContextType {
  langs: string[];
  lang: string;
  setLang: (lang: string) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLangContext must be used within a LangProvider');
  }
  return context;
};

export const LangProvider: React.FC<{ value: LangContextType,children }> = ({ value, children }) => {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
