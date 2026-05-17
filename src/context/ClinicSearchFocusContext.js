import { createContext, useCallback, useContext, useRef } from "react";

const ClinicSearchFocusContext = createContext({
  setClinicSearchInputRef: () => {},
  focusClinicSearch: () => {},
});

export function ClinicSearchFocusProvider({ children }) {
  const clinicSearchInputRef = useRef(null);

  const setClinicSearchInputRef = useCallback((node) => {
    clinicSearchInputRef.current = node;
  }, []);

  const focusClinicSearch = useCallback(() => {
    clinicSearchInputRef.current?.focus?.();
  }, []);

  return (
    <ClinicSearchFocusContext.Provider
      value={{ setClinicSearchInputRef, focusClinicSearch }}
    >
      {children}
    </ClinicSearchFocusContext.Provider>
  );
}

export function useClinicSearchFocus() {
  return useContext(ClinicSearchFocusContext);
}
