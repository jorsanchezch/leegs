import React from "react";


const ConstantsContext = React.createContext({
    APP_NAME: "Leegs",
});

export const ConstantsProvider = ConstantsContext.Provider;
export const ConstantsConsumer = ConstantsContext.Consumer;

export default ConstantsContext;
