// import React from 'react'
// import { useState } from 'react'
// const useTranslate = () => {
//     const [lang, setLang] = useState("rus")
//     const changeLanguage = (lan) => {
//         setLang(lang)
//         localStorage.setItem(lan)
//     }
//   return (
//     {lang, changeLanguage}
//   )
// }

// export default useTranslate




// import React, { useState, createContext } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState('rus'); 

//   const setLanguage = (language) => {
//     setSelectedLanguage(language);
//   };

//   return (
//     <LanguageContext.Provider value={{ selectedLanguage, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };


import { useState } from "react";
function Language(lang){
    const [lang, setLang] = useState("rus");
    setLang(lang)
}
export default Language

