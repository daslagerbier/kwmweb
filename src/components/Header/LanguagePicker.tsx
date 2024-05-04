import { useState } from "react";
import { NextRouter } from "next/router";

interface Language {
  code: string;
  name: string;
}

interface LanguagePickerProps {
  languages: Language[];
  router:NextRouter;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ languages, router }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language

  const handleChangeLanguage = (code: string) => {
    setSelectedLanguage(code);
    router.push(router.pathname, undefined, { locale: code });
  };

  return (
    <div className="relative">
      <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 focus:outline-none">
        <span>{languages.find((lang) => lang.code === selectedLanguage)?.name}</span>
        <svg
          className="w-4 h-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          <path
            fillRule="evenodd"
            d="M4.293 11.293a1 1 0 011.414-1.414L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Language dropdown */}
      <ul className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {languages.map((language) => (
          <li
            key={language.code}
            onClick={() => handleChangeLanguage(language.code)}
            className={`${
              selectedLanguage === language.code ? "bg-gray-200" : ""
            } cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm`}
          >
            <span>{language.name}</span>
            {selectedLanguage === language.code && (
              <svg
                className="absolute right-3 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 11.293a1 1 0 011.414-1.414L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePicker;
