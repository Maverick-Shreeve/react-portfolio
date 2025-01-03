import React, { createContext, useEffect,useContext, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage and provide the theme to the app
export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState(
      () =>  localStorage.getItem('theme') || 'light' // Check localStorage for saved theme or default to 'light
    );

    //apply the theme to the document and save it to localStorage
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // should be set to light by default
    const toggleTheme = () => {
        setTheme ((prevTheme) => (prevTheme === 'light' ? 'dark' :'light'));
    };

        // provide theme and toggleTheme function to children components
    return(
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};