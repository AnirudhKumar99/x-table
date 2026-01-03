import { useState } from "react";
export const Home = () => {
  const [data, setDate] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleSortByDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setDate(sortedData);
  };
  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setDate(sortedData);
  };
  return (
    <div>
      <h1>Dates and Views table</h1>
      <div style={{ marginTop: "20px" }}>
        <button onClick={(e) => handleSortByDate()}>Sort by Date</button>
        <button onClick={(e) => handleSortByViews()}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
