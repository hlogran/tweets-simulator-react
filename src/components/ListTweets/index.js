import React from "react";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";
import "./styles.scss";

export default function ListTweets(props) {
  const { allTweets = [], deleteTweet } = props;

  if (allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No tweets sent yet...</h2>
      </div>
    );
  } else {
    return (
      <Grid container spacing={3} className="list-tweets">
        {allTweets.map((tweet, index) => {
          return (
            <Grid key={index} item xs={4}>
              <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
