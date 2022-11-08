import React, {createContext, useState, useContext, useEffect} from "react";
import getData from '../data/data';


const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ error, setError ] = useState(null);
    const [ isDataLoading, setDataLoading ] = useState(false);
    const [ data, setData ] = useState([]);
    const [selected, setSelected] = useState(0);


    const handleChange = (e) => {
        setSelected(Number(e.target.value));
    }

   const handleSubmit = () => {
       setDataLoading(true);
       getData(`http://www.boredapi.com/api/activity?participants=${selected}`)
           .then(res => {
               const { message, code } = res;
               if (code !== '200' && message) throw Error(message);
               setError(null);
               setData(res);
               console.log(data);

           })
           .catch(setError)
           .finally(() => setDataLoading(false));
   }
    // if (isDataLoading) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Loading...</div>
    //
    // if (!data.length) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Sorry, there's no
    //     info</div>
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
