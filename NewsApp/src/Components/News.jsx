import { useEffect, useState } from "react";
import './News.css'

function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("tesla");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    fetchNews(query);
  }, []);

  const lastIndex = currentPage * 6;
  const firstIndex = ((currentPage - 1) * 6) + 1;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPages = news.length / itemPerPage;
  

  function fetchNews(searchText) {
    setLoading(true);

    fetch(`https://newsapi.org/v2/everything?q=${searchText}&sortBy=publishedAt&apiKey=c7f32b91e48741d7bf1ece5baf09dcfb`)
      .then((response) => response.json())
      .then((json) => {
        setNews(json.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchNews(query);
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.source?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;