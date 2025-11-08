import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// The user is asking to add a new image. The current placeholder images only has one.
// I will add the new image to the list of placeholder images.
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
