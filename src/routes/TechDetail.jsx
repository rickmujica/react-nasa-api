// TechDetail.jsx
import { useLocation } from "react-router-dom";
import { capitalizeWords, stripHtmlTags } from "../helpers/helperFunctions";

function TechDetail(props) {
  const location = useLocation();
  const dataTech = location.state; // Access the state from location

  if (!dataTech) {
      return "Loading...";
  }


  return (
    <main className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
        {capitalizeWords(dataTech.title)}
      </h1>
      <img className="w-full rounded-lg shadow-lg" src={dataTech.imgURL} alt={dataTech.title} />
      <div className="px-2 py-4">
        <p className="text-gray-700 text-base">{stripHtmlTags(dataTech.descText)}</p>
      </div>
    </div>
    </main>
  );
}

export default TechDetail;
