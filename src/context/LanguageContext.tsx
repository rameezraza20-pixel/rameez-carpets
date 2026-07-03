"use client";
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: (l: string) => {} });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState('en');
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};
export const useLang = () => useContext(LanguageContext);