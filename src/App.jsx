import { useState } from "react";
import quoteData from "./assets/quoteData";
import "./App.css";

function App() {
  const quotes = quoteData.data.quotes; //Array of quotes
  const startIndex = Math.floor(Math.random() * quotes.length);

  const InitialQuote = quotes[startIndex].quote;
  const InitialAuthor = quotes[startIndex].author;

  const [text, setText] = useState(InitialQuote);
  const [author, setAuthor] = useState(InitialAuthor);

  const changeQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setText(quotes[index].quote);
    setAuthor(quotes[index].author);
  };

  return (
    <>
      <main>
        <div id="quote-box" class="quote-box">
          <div id="text" class="text">
            {text}
          </div>
          <div id="author" class="author">
            &#8212; {author}
          </div>
          <div className="click-block">
            <button id="new-quote" class="new-quote" onClick={changeQuote}>
              New Quote
            </button>
            <a
              target="_blank"
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              class="tweet-quote"
            >
              Tweet
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
