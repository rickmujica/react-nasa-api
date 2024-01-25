import { useEffect, useState } from "react";
import Tech from "./Tech";
import { useLoaderData } from "react-router-dom";

function ListTech() {
  const [obj, setObj] = useState([]);
  const [load, setLoad] = useState(false);

  const { techData } = useLoaderData();

  useEffect(() => {
 
      setObj(techData);
      setLoad(true);
   
  }, [techData]);

  return (
    <main className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex-col justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
          Nasa Tech Patents
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {load
              ? obj.length != 0
                ? obj.map((o) => {
                    return <Tech key={o[0]} dataTech={o} />;
                  })
                : "No results"
              : "Loading..."}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListTech;
