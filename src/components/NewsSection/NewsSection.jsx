import { useEffect, useState, useRef } from "react";
import "./NewsSection.css";

const NEWS_API_KEY = "ff7ca9ca9e9f45e7921d07e8fffab15a";
const PIXABAY_API_KEY = "55295944-00667858dcc250c98128e887a";

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const isFirstLoad = useRef(true); 


  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=pets+dogs+cats&category=animals&image_type=photo&per_page=50`
      );
      const data = await res.json();
      setImages(data.hits);
    };

    fetchImages();
  }, []);


  useEffect(() => {
    if (images.length === 0) return;

    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=pets OR dogs OR cats&language=en&pageSize=4&page=${page}&apiKey=${NEWS_API_KEY}`
      );
      const data = await res.json();

      const newArticles = data.articles.map((article, index) => {
        const imageIndex = (page - 1) * 4 + index;

        return {
          ...article,
          image:
            images[imageIndex]?.webformatURL ||
            "https://via.placeholder.com/300",
        };
      });

      
      setArticles((prev) =>
        page === 1 ? newArticles : [...prev, ...newArticles]
      );
    };


    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      fetchNews();
    } else {
      fetchNews();
    }
  }, [page, images]);

  return (
    <div className="news-section">
      <h2>Interacting with our pets</h2>

      <div className="news-grid">
        {articles.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="news" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button
        className="see-more"
        onClick={() => setPage((prev) => prev + 1)}
      >
        See more
      </button>
    </div>
  );
};

export default NewsSection;