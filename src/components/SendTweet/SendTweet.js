import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

import "./SendTweet.scss";

export default function SendTweet() {
  return (
    <div class="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
