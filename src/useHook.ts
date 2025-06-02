import { useState } from "react";

export default function useHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  const bind = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, bind];
}
