import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const apiKey = import.meta.env.VITE_NASA_API_KEY;

export async function fetchPhoto() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );

  const data = await res.json();

  return { data };
}

export async function fetchTech() {
  const response = await fetch(
    `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${apiKey}`
  );
  const data = await response.json();
  const techData = data.results;
  
  return { techData }
}

export default function Root() {
    return (
      <>
        <NavBar>
            <Outlet />
        </NavBar>
      </>
    );
  }