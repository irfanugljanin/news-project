import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { newsapi } from "../../../../api/api";

const NewsList = () => {
  const navigation = useNavigate();
  const [pages, setPages] = useState(20);
  const [news, setNews] = useState([]);
  const key = "cc7df0e942404bdabd2196430605f0ef";
  const fetchnews = async () => {
    try {
      const result = await newsapi.get(
        `/v2/top-headlines?country=us&pageSize=${pages}&apiKey=${key}`
      );
      console.log(result);
      const data = result.data;
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchnews();
  }, [pages]);

  return (
    <div className="container">
      <div className="advertisement">Advertisement Place</div>
      {news.map((item) => {
        return (
          <div className="card-container">
            <img src={item.urlToImage} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
      <div className="btn-loadmore">
        <button
          onClick={() => {
            setPages(pages + 20);
          }}
          className="load-more"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewsList;
