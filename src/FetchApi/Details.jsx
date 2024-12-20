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
      </div>
      <div key={id} className="  flex   items-center w-[80%] m-auto  gap-5 shadow-lg bg-blue-900 mt-10" >
        <div className="  pl-8 pt-8 pb-8  shadow-2xl ">
          {" "}
          <img className="max-w-96  rounded-xl shadow-2xl " src={state.url} alt={state.title} />
        </div>
        <div className="px-10 ">
        <h1 className="text-5xl text-white leading-tight	">{state.title}</h1> <br /><br />
        <h2 className="text-2xl text-white pr-32">{state.description}</h2>
        </div>
       
      </div>
    </>
  );
};

export default Details;
