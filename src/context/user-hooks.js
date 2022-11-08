import React, {createContext, useState, useContext, useEffect} from "react";
import getData from '../data/data';


const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ error, setError ] = useState(null);
    const [ isDataLoading, setDataLoading ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ selected, setSelected ] = useState(0);


    const handleChange = (e) => {
        setSelected(Number(e.target.value));
    }

   const handleSubmit = () => {
       setDataLoading(true);
       getData(`https://www.boredapi.com/api/activity?participants=${selected}`)
           .then(res => {
               const { message, code } = res;
               if (code !== '200' && message) throw Error(message);
               setError(null);
               setData(res);
           })
           .catch(setError)
           .finally(() => setDataLoading(false));
   }

  return (
    <AppContext.Provider
      value={{
          isDataLoading,
          setDataLoading,
          error,
          data,
          selected,
          setSelected,
          handleChange,
          handleSubmit
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
