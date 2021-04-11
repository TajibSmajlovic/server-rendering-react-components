import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { handleModifyAnswerVotes } from "../shared/utility";

let state = undefined;

fetch("http://localhost:5000/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;

    render();
  });

function handleVote(answerId, value) {
  state.answers = handleModifyAnswerVotes(state.answers, answerId, value);

  fetch(`vote/${answerId}?value=${value}`);

  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModifyAnswerVotes={handleVote} />,
    document.getElementById("app")
  );
}
