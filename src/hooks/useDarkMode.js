import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark", false);
  return [value, setValue];
};

export default useDarkMode;
