"use client";
import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

export const LanguageModal = () => {
  const { setLang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (!saved) setShow(true);
    else setLang(saved);
  }, [setLang]);

  const selectLang = (l: string) => {
    setLang(l);
    localStorage.setItem('lang', l);
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">Select Language / اختر اللغة</h2>
        <div className="flex gap-4">
          <button onClick={() => selectLang('en')} className="px-6 py-2 bg-red-700 text-white rounded">English</button>
          <button onClick={() => selectLang('ar')} className="px-6 py-2 bg-red-700 text-white rounded">العربية</button>
        </div>
      </div>
    </div>
  );
};