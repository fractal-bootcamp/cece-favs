//define PictureData types
export type PictureData = {
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  genres: string[];
  description: string;
  tags: string[];
};

export const pictureData: PictureData[] = [
  {
    title: "Tom Tillys Pier",
    location: "Knoxville, TN",
    date: "11.2023",
    imageUrl: "/frontend/src/assets/knoxville.jpg",
    genres: ["landscape"],
    description:
      "cinestill 50D, overcast, eating fried turkey with famiy at the bar ontop the hill",
    tags: ["blue", "water", "rural", "35mm"],
  },
];
