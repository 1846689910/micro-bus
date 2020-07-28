import React, { createContext, useState } from "react";

type ServiceContextProviderProps = {
  children: React.ReactChild;
};

type ContextState = {
  a: number;
  b: number;
  setA: React.Dispatch<React.SetStateAction<number>>;
  setB: React.Dispatch<React.SetStateAction<number>>;
};

const ServiceContext = createContext({} as ContextState);
export default ServiceContext;
export const ServiceContextProvider = ({
  children,
}: ServiceContextProviderProps) => {
  const { Provider } = ServiceContext;
  const [a, setA] = useState<number | undefined>(undefined);
  const [b, setB] = useState<number | undefined>(undefined);
  // event add useQuery here
  // const { data } = useQuery(QUERY)
  return <Provider value={{ a, setA, b, setB }}>{children}</Provider>;
};
