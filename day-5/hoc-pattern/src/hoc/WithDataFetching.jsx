import React, { useEffect, useState } from "react";

function WithDataFetching(WrappedComponent) {
  return function withDataFetchingComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3001/movies");
          if (!response.ok) {
            throw new Error("failed to fetch movies");
          }
          const data = await response.json();
          console.log(data);
          setData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    if (loading) {
      return <p className="text-gray-500">Loading movies ...</p>;
    }
    if (error) {
      return <p className="text-red-500">Error in loading movies ...</p>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
}

export default WithDataFetching;
