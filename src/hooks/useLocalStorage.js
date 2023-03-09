import { useEffect, useState } from "react";

let PRIFIX = "code-editor-pwa";

export const useLocalStorage = (key, initialValue) => {
  const storageKey = PRIFIX + key;

  const [values, setValues] = useState(() => {
    let jsonValue = localStorage.getItem(storageKey);
    if (jsonValue) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (values) {
      localStorage.setItem(storageKey, JSON.stringify(values));
    }
  }, [storageKey, values]);

  return [values, setValues];
};
