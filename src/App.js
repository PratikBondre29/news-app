import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Splash from "./components/Splash/Splash";
import SearchBox from "./components/SearchBox/SearchBox";
import Article from "./components/Article";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Toggler from "./components/Toggler/Toggler";
import SpeechRecognition from "./components/SpeechRecognition/SpeechRecognition";
import { useSpeechSynthesis } from "react-speech-kit";
import { API_Key } from "./config";

const App = () => {
  const [page, setPage] = useState("unsplash"); //page = splash
  const [article, setArticle] = useState([]);
  const [input, setInput] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [load, setLoad] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { speak, voices } = useSpeechSynthesis();

  //Splash Screen
  useEffect(() => {
    setTimeout(() => {
      setPage("unsplash");
    }, 4000);
  }, []);

  //apiKey
  const API = API_Key;

  const getArticles = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
      )
      .then((response) => {
        const data = response.data.articles;
        console.log(data);
        setArticle(data);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getArticles();
  }, []);

  //console.log(article.length);

  //SearchBox Data

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  //console.log(input);

  //Handling request for searchbox
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSearched(true);

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${input}&from=2021-06-14&sortBy=popularity&apiKey=${API}`
      )
      .then((response) => {
        const data = response.data.articles;
        console.log(data);
        setInput("");
        setArticle(data);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handling voice assistant

  const voiceSearch = (data) => {
    if (data !== "") {
      speak({ text: `Searching for ${data}`, voice: voices[2] });
      setTimeout(() => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=${data}&from=2021-06-14&sortBy=popularity&apiKey=${API}`
          )
          .then((response) => {
            const data = response.data.articles;
            console.log(data);
            setArticle(data);

            setLoad(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 2000);
    }
  };

  //handling navbar requests for different options

  const handleOption = (param) => {
    if (param === "business") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (param === "entertainment") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (param === "health") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (param === "science") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (param === "sports") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (param === "technology") {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API}`
        )
        .then((response) => {
          const data = response.data.articles;
          console.log(data);
          setArticle(data);
          setLoad(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //for togglebar
  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className="App">
      {page === "splash" ? (
        <Splash />
      ) : (
        <div>
          <Toggler handleToggle={handleToggle} />
          <Header />
          <Navbar handleOption={handleOption} />
          <SearchBox handleInput={handleInput} handleSubmit={handleSubmit} />
          {!load && (
            <div className="text-center text-white">
              <h5>Loading.....</h5>
            </div>
          )}
          {article.length > 1 && !isSearched ? (
            <div className="container">
              {load && (
                <div className="result text-center text-white">
                  <h4>{article.length} articles found.</h4>
                </div>
              )}
              <div className="row">
                {article.map((data, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                  >
                    <Article key={index} article={data} toggle={toggle} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container">
              {load && (
                <div className="result text-center text-white">
                  <h4>{article.length} articles found for this search.</h4>
                </div>
              )}

              <div className="row">
                {article.map((data, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                  >
                    <Article article={data} toggle={toggle} />
                  </div>
                ))}
              </div>
            </div>
          )}
          <SpeechRecognition voiceSearch={voiceSearch} />
        </div>
      )}
    </div>
  );
};

export default App;
