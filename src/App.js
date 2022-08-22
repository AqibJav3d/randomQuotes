import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [responseData, setResponseData] = React.useState("");

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "X-RapidAPI-Key": "e8b0b524e7msh2927917f2d37721p1e22d7jsn94efc389c3df",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(responseData);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header>
        <h1>Quote of the Day</h1>
        {/* <pre>
          <code>{responseData & JSON.stringify(responseData, null, 4)}</code>
        </pre> */}
        <button type="button" onClick={fetchData}>
          Next Quote
        </button>
        <main>
          {responseData && (
            <blockquote>
              "{responseData && responseData.content}"
              <small>
                {responseData &&
                  responseData.originator &&
                  responseData.originator.name}
              </small>
            </blockquote>
          )}
        </main>
      </header>
    </div>
  );
}

export default App;
