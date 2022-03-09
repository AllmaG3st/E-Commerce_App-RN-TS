import { ListingRequest } from "./../types/data";

import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = (
  listing: ListingRequest,
  onUploadProgress: (progress: number) => void
) => {
  const data: any = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  listing.images.forEach((image: any, index: any) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  console.log(data);

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
