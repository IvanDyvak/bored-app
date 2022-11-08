import React, {createContext, useState, useContext, useEffect} from "react";
import getData from '../data/data';


const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ error, setError ] = useState(null);
    const [ isDataLoading, setDataLoading ] = useState(false);
    const [ selected, setSelected ] = useState(0);
    const [ query, setQuery ] = useState(``);
    const [ activities, setActivities ] = useState({});

    const handleSubmit = () => {
        setDataLoading(true);
        getData(query)
            .then(res => {
                const { message, code } = res;
                if (code !== '200' && message) throw Error(message);
                setError(null);
                setActivities(res);
            })
            .catch(setError)
            .finally(() => setDataLoading(false));
    }

    const handleChange = (e) => {
        setSelected(Number(e.target.value));
    }

    useEffect(() => {
        selected !== 0 ? setQuery(`https://www.boredapi.com/api/activity?participants=${selected}`) :
            setQuery(``);
    }, [selected]);

  return (
    <AppContext.Provider
      value={{
          isDataLoading,
          setDataLoading,
          error,
          selected,
          setSelected,
          handleChange,
          handleSubmit,
          query,
          setQuery,
          activities,
          setActivities
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
