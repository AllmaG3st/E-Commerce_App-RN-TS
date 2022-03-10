import { useEffect, useState, useCallback } from "react";

export const useApi = (apiFunc: (...args: any) => Promise<any>) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (...args) => {
    setIsLoading(true);
    const { ok, data }: any = await apiFunc(...args);
    setIsLoading(false);

    if (!ok) return setError(true);

    setError(false);
    setData(data);
  }, []);

  useEffect(() => {
    request();
  }, [request]);

  return { data, error, isLoading, request };
};
