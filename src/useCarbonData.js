import { useState, useEffect } from 'react';

const row = d => {
  return d;
};

export const useCarbonData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8081/api/data/carbon")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


