import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { newsapi } from "../../../../api/api";

const NewsList = () => {
  const navigation = useNavigate();

  const [news, setNews] = useState([]);
  const key = "cc7df0e942404bdabd2196430605f0ef";
  const fetchnews = async () => {
    try {
      const result = await newsapi.get(
        `/v2/top-headlines?country=us&apiKey=${key}`
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
  }, []);

  return (
    <div className="container">
      {news.map((item) => {
        return (
          <div className="card-container">
            <img src={item.urlToImage} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
