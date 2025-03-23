import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/index-details");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>API Data Display</h1>
      <div className="data-container">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <h2>{item.id}</h2>
            <h2>{item.NAME}</h2>
            <p>{item.PHONE}</p>
            <p>{item.EMAIL}</p>
            <p>{item.EMP_NAME}</p>
            {/* Add more fields as per your API response */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
