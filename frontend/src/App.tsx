import React, { useEffect, useState } from "react"; //use useState to manage search query and movie data
import axios from "axios"; //use axios to make HTTP requests to our API
import "./App.css";

//define types for your modules
//start with defining the structure of data
type Picture = {
  id: string;
  title: string;
  location: Location;
  date: string;
  imageName: string;
  genres: Genres[];
  description: string;
  tags: Tag[];
};

type Location = {
  id: string;
  // image: Picture[];
  name: string;
};

type Genres = {
  id: string;
  name: string;
  // tags: Tag[];
  // pictures: Picture[];
};

type Tag = {
  id: string;
  name: string;
  //  image: Picture[];
  // Genre: Genres[];
};

//component prop types
//define the expected props for each component --> like creating a contract for how the components should be used
type SearchSectionProps = {
  query: string; //represents query search
  //function to update the query state
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

type PictureProps = {
  picture: Picture;
};

function getImageUrl(imageName: string): string {
  return `${API_URL}/images/${imageName}`;
}

//seachSection component--> handles the search input
const SearchSection: React.FC<SearchSectionProps> = ({ query, setQuery }) => {
  return (
    <div className="mb-4">
      <input
        className="skeleton h-15 w-18 p-4 border rounded input input-bordered input-warning w-full max-w-xs font-sans font-style: italic text-sm"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="...sort me.."
      />
    </div>
  );
};

//defining API URL for backend server address
const API_URL = "http://localhost:8000";

//PictureCard component --> display individual picture cards
const PictureCard: React.FC<PictureProps> = ({ picture }) => {
  return (
    <div className="border rounded p-4 mb-4 font-mono tracking-wide bg-slate-900">
      <img
        src={`${API_URL}/images/${picture.imageName}`}
        alt={picture.title}
        className="w-full h-48 object-cover mb-2"
        onError={(e) => {
          console.error(
            `higher powers declare u have been denied loading of : ${picture.imageName}`
          );
        }}
      />
      <h2 className="text-md font-bold">{picture.title}</h2>
      <p className="para"> Location: {picture.location.name}</p>
      <p className="text-xs">Date: {picture.date}</p>
      <div className="mt-2">
        {picture.genres.map((genre) => (
          <span
            key={genre.id}
            className=" text-white bg-amber-500 text-xs px-2 py-1 rounded flex-row-reverse ml-1"
          >
            {genre.name}
          </span>
        ))}
      </div>
      <p className="para mt-2">{picture.description}</p>
    </div>
  );
};

//main app component
//manage the state and coordinates b/w search input & displaying results
const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [pictureData, setPictureData] = useState<Picture[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      //debouncing helps reduce unnecessary API calls --> improves performance by waiting for user to stop typing before making request
      if (query) {
        handleSearch();
      } else {
        setPictureData([]);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  //make API call --> search for pictures
  const handleSearch = async () => {
    try {
      console.log("we r searching ur data.schemas for :", query);
      const response = await axios.get<Picture[]>(
        `http://localhost:8000/api/pictures/search?query=${encodeURIComponent(
          query
        )}`
      );
      console.log("we happily deliver ur search results :", response.data);
      setPictureData(response.data);
    } catch (error) {
      console.error(
        `CROIKY! we'v encountrd an errOr loading your pictures! :/`,
        error
      );
    }
  };
  return (
    <div className="app-container bg-opacity-10">
      <div className="content-container">
        <div className="">
          <div className="flex flex-col justify-center items-center m-2">
            <div className="card bg-base-400 flex flex-col shadow-xl p-6">
              <h1 className="text-4xl font-bold mb-4 font-mono flex items-center ">
                Archives
                <span className="loading loading-dots loading-sm ml-.5 p-1 mt-5"></span>
              </h1>

              <SearchSection query={query} setQuery={setQuery} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pictureData.map((picture) => (
                  <PictureCard key={picture.id} picture={picture} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
