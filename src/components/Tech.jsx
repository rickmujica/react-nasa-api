import { Link } from "react-router-dom";
import { capitalizeWords, stripHtmlTags } from "../helpers/helperFunctions";

function Tech({ dataTech }) {
    
    const { 0: id, 10: imgURL, 5: title, 3: descText } = dataTech;

    let techData = {
      id,
      imgURL,
      title,
      descText,
    };

  return (
    <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgURL} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{capitalizeWords(title)}</div>
        <p className="text-gray-700 text-base line-clamp-4">
          {stripHtmlTags(descText)}
        </p>
        <div className="mt-6">
          <Link
            to="/detail"
            state={techData}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tech;
