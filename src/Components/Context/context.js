import { createContext } from "react";
import { useState } from "react";
export const Mycontext = createContext();

const GlobalContext = (props) => {
  const [newsArticle, setNewsArticle] = useState({});
  return (
    <div>
      <Mycontext.Provider value={{ newsArticle, setNewsArticle }}>
        {props.children}
      </Mycontext.Provider>
    </div>
  );
};

export default GlobalContext;
