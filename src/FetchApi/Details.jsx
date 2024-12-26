import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();
  console.log(id);
  let showImage = async () => {
    try {
      let x = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      console.log(x.data);
      setState({
        url: x.data.photo.url,
        id: x.data.photo.id,
        title: x.data.photo.title,
        description: x.data.photo.description,
      });
    } catch {
      console.error("Error getting");
    }
  };
  useEffect(() => {
    showImage();
  }, []);
  return (
    <>
      <div className="text-center text-5xl p-6 shadow-md ">
        <Link to={`/`}>Back to Home</Link>
      </div> <br /> <br />
      <div className="p-16" key={id}>
      <div  className="  bg-blue-900 max-w-md  mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl " >
        <div className="md:flex">        
          <div className="  md:shrink-0 ">
          {" "}
          <img className="h-48 w-full object-cover md:h-full md:w-60 " src={state.url} alt={state.title} />
        </div>
        <div className="px-8 py-16">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className="block mt-1 text-lg leading-tight font-medium text-white   hover:underline	">{state.title}</h1> <br /><br />
        <h2 className="mt-2 text-white">{state.description}</h2>
        </div>
        </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default Details;
