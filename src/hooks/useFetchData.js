import React, { useState } from "react";

export function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, [url]);

  return { data, isLoading };
}
