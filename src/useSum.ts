import { useState, useMemo, useCallback } from "react";

const useSum = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  return {
    sum: useMemo(() => numbers.reduce((a, b) => a + b, 0), [numbers]),
    add: useCallback(
      (value: number) => {
        setNumbers([...numbers, value]);
      },
      [numbers]
    ),
  };
};

export default useSum;
