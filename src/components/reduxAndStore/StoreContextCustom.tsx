import React, { createContext, useState, ReactNode } from "react";

// Khởi tạo context
export const StoreContext = createContext<{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  loading: false,
  setLoading: () => {},
});

// Component Provider
export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [numberLoading, setNumberLoading] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <StoreContext.Provider value={{ loading, setLoading }}>
      {children}
    </StoreContext.Provider>
  );
};
