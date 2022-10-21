import { createContext, useContext, useState } from 'react';

const EnrollContext = createContext();

export default EnrollContext;

export function useEnrollContext() {
  return useContext(EnrollContext);
}

export function EnrollProvider({ children }) {
  const [enrolled, setEnrolled] = useState(false);

  return <EnrollContext.Provider value={{ enrolled, setEnrolled }}>{children}</EnrollContext.Provider>;
}
