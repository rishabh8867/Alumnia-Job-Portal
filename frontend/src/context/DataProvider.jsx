import { createContext, useState } from "react";


export const DataContext = createContext(null); //states aer in dataContext

const DataProvider = ({ children }) => {
    
    const [receiptData,setReceiptData] = useState({});
    const [paymentDone,setPaymentDone] = useState(false);
    
  
    return (
      <DataContext.Provider
        value={{
            receiptData,setReceiptData,paymentDone,setPaymentDone
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataProvider; //wrapped dataprovider in app.js

