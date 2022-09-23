import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import "./Home.scss";
import { db } from "../../appwrite";

const Home = () => {
  const navigate = useNavigate();
  const handleNewGroup = () => {
    navigate("/home/newgroup");
  };


  const [notice, setNotice] = useState([]);

  const [news, setNews] = useState([]);

  const getNotices = async () => {
    const notices = await db.listDocuments(
      process.env.REACT_APP_APPWRITE_DATABASE_ID,
      process.env.REACT_APP_NOTICE_COLLECTION_ID
    );
    const parseNotices = notices.documents.map((notice) => {
      let href = notice.notice.match(/(?<=href=").+(?=")/g); // returns "exampleLink"
      let inText = notice.notice.match(/(?<=>).+(?=<)/g); // returns "exampleText"
      return {
        href: href,
        inText: inText,
      };
    });
    setNotice(parseNotices);
    // setNotice(notices.documents);
  };

  const getNews = async () => {
    const news = await db.listDocuments(
      process.env.REACT_APP_APPWRITE_DATABASE_ID,
      process.env.REACT_APP_NEWS_COLLECTION_ID
    );
    const parseNews = news.documents.map((news) => {
      let href = news.news.match(/(?<=href=").+(?=")/g); // returns "exampleLink"
      let inText = news.news.match(/(?<=>).+(?=<)/g); // returns "exampleText"
      return {
        href: href,
        inText: inText,
      };
    });
    setNews(parseNews);
    // setNews(news.documents);
  };

  useEffect(() => {
    getNotices();
    getNews();
  }, []);

  return (
    <div className="home-main">
      <NavBar></NavBar>
      <h1 className="heading2">Home</h1>
      <div className="landing-flex-home">
        <div className="left-home">
          <div className="home-heading">Latest News</div>

          {notice.map((notice) => {
            return (
              <div className="home-element">
                <a href={notice.href} target="_blank" rel="noreferrer">
                  {notice.inText}
                </a>
              </div>
            );
          })}
</div>
         
       
        <div className="right-home">
          <div className="home-heading">Notices</div>
        {news.map((news) => {
          return (
            <div className="home-element">
              <a href={news.href} target="_blank" rel="noreferrer">
                {news.inText}
              </a>
            </div>
          );
        })}
        
       
      
        </div>
      </div>
      <button onClick={handleNewGroup} className="landing-button margin">
        Add Group
      </button>
      {/* <p>
                User Email: {user && user.email} 
                User Id: {user.uid}
            </p> */}
    </div>
  );
};

export default Home;
