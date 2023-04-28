import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const sharedContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const SharedProvider = ({ children }) => {
    const [information, setInformation] = React.useState([]);
    const [output, setName] = React.useState("");
  
    const updateInformation = (newInformation) => {
      setInformation(newInformation);
    };

    const updateName = (newName) => {
        setName(newName);
    };
  
    return (
      <sharedContext.Provider value={{ information, updateInformation , output , updateName}}>
        {children}
      </sharedContext.Provider>
    );
};