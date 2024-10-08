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
    date: "November 2023",
    imageUrl: "/frontend/src/assets/knoxville.jpg",
    genres: ["landscape", "travel", "still-life"],
    description: "just up the hill locals gather to eat Tom's fried turkey",
    tags: ["blue", "water", "analog", "35mm"],
  },
  {
    title: "Northern Hills",
    location: "San Francisco, CA",
    date: "June 2021",
    imageUrl: "/frontend/src/assets/mountains.JPG",
    genres: ["landscape", "travel", "wildlife"],
    description: "clouds roll through the mountains outside the city",
    tags: ["eerie", "trees", "nature", "digital", "mirrorless", "green"],
  },
  {
    title: "Ant Hills",
    location: "Manhattan, NYC",
    date: "May 2024",
    imageUrl: "/frontend/src/assets/empire-state.JPG",
    genres: ["architecture", "street"],
    description: "view outside empire state",
    tags: [
      "35mm",
      "squares",
      "windows",
      "buildings",
      "analog",
      "dutch",
      "brown",
    ],
  },
  {
    title: "Southside View",
    location: "Manhattan, NYC",
    date: "May 2024",
    imageUrl: "/frontend/src/assets/empire-state2.JPG",
    genres: ["architecture", "cityscape", "street"],
    description: "view outside empire state looking towards downtown Manhattan",
    tags: ["35mm", "analog", "squares", "windows", "buildings", "wide"],
  },
  {
    title: "Shoreside",
    location: "Athens, Greece",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/athens4.jpg",
    genres: ["street", "travel", "still-life"],
    description: "view outside empire state",
    tags: ["35mm", "ocean", "yellow", "analog", "double-exposure"],
  },
  {
    title: "Kohlman's Livingroom",
    location: "Centennial, CO",
    date: "August 2024",
    imageUrl: "/frontend/src/assets/alex_parents.jpg",
    genres: ["architectural", "b/w"],
    description: "",
    tags: ["double-exposure", "35mm", "analog", "grey", "living-room"],
  },
  {
    title: "Alley",
    location: "Athens, Greece",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/athens12.jpg",
    genres: ["street", "architectural", "still-life"],
    description: "people going where they're getting",
    tags: ["35mm", "analog", "orange", "buildings"],
  },
  {
    title: "Pier",
    location: "Ocho Rios, Jamacia",
    date: "March 2024",
    imageUrl: "/frontend/src/assets/boat1.jpg",
    genres: ["travel", "landscape"],
    description: "fishing boats docked in the afternoon",
    tags: ["35mm", "analog", "boat", "blue"],
  },
  {
    title: "Coast of Capri",
    location: "Capri, IT",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/capri.jpg",
    genres: ["landscape", "travel", "still-life"],
    description: "cool water, hot day",
    tags: ["analog", "35mm", "blue", "peoples", "blocking"],
  },
  {
    title: "Chandelier",
    location: "Prague, CZ",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/chandelier.jpg",
    genres: ["street", "architectural", "travel", "b/w", "stil-life"],
    description: "piano-man playing in a big empty resturant",
    tags: ["35mm", "analog", "circles"],
  },
  {
    title: "Hills of Santornini",
    location: "Santorini, Greece",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/Eu1.jpg",
    genres: ["landscape", "travel", "still-life"],
    description: "pulling up to the island of santorini",
    tags: ["double-exposure", "houses", "hills", "pink", "35mm", "analog"],
  },
  {
    title: "Ode",
    location: "Prague, CZ",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/Eu2.png",
    genres: ["lanscape", "street", "architectural", "travel"],
    description: "the old jewish cemetary",
    tags: ["green", "35mm", "gravestone", "double-exposure"],
  },
  {
    title: "windows",
    location: "Istanbul, TR",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/eu3.jpg",
    genres: ["travel", "street", "architectural"],
    description: "walking around rewinding film",
    tags: [
      "sqaures",
      "blue",
      "orange",
      "windows",
      "35mm",
      "analog",
      "double-exposure",
    ],
  },
  {
    title: "La Rinascente",
    location: "Milan, IT",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/milano.jpg",
    genres: ["travel", "architectural", "street"],
    description: "mall in the piazza by the Milano Duomo",
    tags: ["yellow", "architectural", "bulding", "shopping", "#35mm"],
  },
  {
    title: "Donkey",
    location: "Mykonos, Greece",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/mykonos.jpg",
    genres: ["travel", "street", "wildlife", "macro"],
    description: "tired donkey from carrying tourists up the hill",
    tags: ["donkey", "white", "35mm", "analog"],
  },
  {
    title: "Barefoot in the Rain",
    location: "Mykonos, Greece",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/myokons.jpg",
    genres: ["street", "landscape", "architectural"],
    description: "after a storm washed all the dirt out of the streets",
    tags: ["white", "blue", "window", "streets", "35mm"],
  },
  {
    title: "Home",
    location: "Naples, IT",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/naples.jpg",
    genres: ["street", "travel", "still-life", "architectural"],
    description: "tiny balconies on the Napoli streets",
    tags: ["orange", "square", "balcony", "window"],
  },
  {
    title: "Sunset Over the Pacific",
    location: "Unknown",
    date: "May 2024",
    imageUrl: "/frontend/src/assets/ocean1.jpg",
    genres: ["landscape", "travel", "still-life"],
    description: "we try and watch the sunsets even if we're too busy",
    tags: ["yellow", "water", "35mm"],
  },
  {
    title: "Off the Coast",
    location: "Positano, IT",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/positiano.jpg",
    genres: ["landscape", "travel"],
    description:
      "people hanging out on the rocky beach in one of the most tourist driven places in Italy",
    tags: ["peoples", "water", "35mm"],
  },
  {
    title: "Warm Walls",
    location: "Prague, CZ",
    date: "August 2023",
    imageUrl: "/frontend/src/assets/prague3.jpg",
    genres: ["street", "architectural", "travel"],
    description: "early morning walking around the city",
    tags: ["pink", "yellow", "35mm", "building", "window", "squares"],
  },
  {
    title: "Granite Pools",
    location: "Yosemite, CA",
    date: "June 2021",
    imageUrl: "/frontend/src/assets/yosemite3.jpg",
    genres: ["travel", "landscape", "still-life"],
    description:
      "we hiked 8miles uphill to make it to the top of the waterfall",
    tags: ["orange", "trees", "35mm", "waterfall", "nature"],
  },
  {
    title: "Lombard Street",
    location: "SanFrancisco CA",
    date: "May 2021",
    imageUrl: "/frontend/src/assets/sanfran.JPG",
    genres: ["street", "travel", "architectural"],
    description: "top of Lombard street and you can see the whole city",
    tags: ["squares", "blue", "pink", "digital", "city"],
  },
  {
    title: "Rialto Bridge",
    location: "Venice, IT",
    date: "August 2022",
    imageUrl: "/frontend/src/assets/venice12",
    genres: ["landscape", "travel", "street"],
    description: "views NorthWest from the Ponte di Rialto",
    tags: ["blue", "orange", "35mm", "canal"],
  },
];
