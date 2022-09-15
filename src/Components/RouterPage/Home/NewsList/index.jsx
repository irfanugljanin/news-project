import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { newsapi } from "../../../../api/api";

const NewsList = () => {
  const [news, setNews] = useState({});
  const key = "cc7df0e942404bdabd2196430605f0ef";
  const fetchnews = async () => {
    try {
      const result = await newsapi.get(
        `/v2/top-headlines?country=us&apiKey=${key}`
      );
      const data = result.data;
      setNews(data.articles);
      console.log(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchnews();
  }, []);

  return <div className="newslist-container"></div>;
};

export default NewsList;
