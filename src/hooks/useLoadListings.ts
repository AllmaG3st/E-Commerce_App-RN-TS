import { useEffect, useCallback, useState } from "react";

import { Listing } from "types/data";
import listingsApi from "api/listings";

export const useLoadListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadListings = useCallback(async () => {
    setIsLoading(true);
    const { ok, data }: any = await listingsApi.getListings();
    setIsLoading(false);

    if (!ok) return setError(true);

    setError(false);
    setListings(data);
  }, []);

  useEffect(() => {
    loadListings();
  }, [loadListings]);

  return [listings, error, isLoading, loadListings];
};
