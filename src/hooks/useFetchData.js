import React, { useState } from "react";

// export function useFetchData() {}

export function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
}
