import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { newsapi } from "../../../../api/api";
import { useContext } from "react";
import { Mycontext } from "../../../Context/context";

const NewsList = () => {
  const { newsArticle, setNewsArticle } = useContext(Mycontext);
  console.log(newsArticle);
  const navigation = useNavigate();
  const [pages, setPages] = useState(20);
  const [news, setNews] = useState([]);
  const key = "cc7df0e942404bdabd2196430605f0ef";
  const fetchnews = async () => {
    try {
      const result = await newsapi.get(
        `/v2/top-headlines?country=us&pageSize=${pages}&apiKey=${key}`
      );
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
            <img src={item.urlToImage} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <div className="read-more">
              <p>{item.publishedAt}</p>
              <Link
                to={"/article"}
                state={item}
                onClick={() => setNewsArticle(item)}
              >
                <button>Read More</button>
              </Link>
            </div>
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
