"use client";
import { AppStore } from "store/AppStore";
import React, { createContext, useContext } from "react";

const storeProvider = new AppStore();
export const StoreContext = createContext(storeProvider);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={storeProvider}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
