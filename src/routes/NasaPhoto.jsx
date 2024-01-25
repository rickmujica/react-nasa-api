import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const NasaPhoto = () => {
  
  const [photoData, setPhotoData] = useState(null);
  const { data } = useLoaderData();
  useEffect(() => {

    setPhotoData(data);
    
  }, [data]);

  if (!photoData) return <div />;

  return (
    <main className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Astronomy Picture of the Day
        </h1>
      </div>
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className="w-full rounded-lg shadow-lg"
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            allow="encrypted-media"
            allowFullScreen
            className="w-full h-96 rounded-lg shadow-lg"
          />
        )}
        <h1 className="text-2xl font-bold mt-4 text-gray-900">
          {photoData.title}
        </h1>
        <p className="text-sm text-gray-500">{photoData.date}</p>
        <p className="mt-4 text-gray-700">{photoData.explanation}</p>
      </div>
    </main>
  );
};
