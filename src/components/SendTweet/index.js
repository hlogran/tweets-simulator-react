import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

import "./styles.scss";

export default function SendTweet(props) {
  const { setToastProp, allTweets = [] } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;

    let allTweetArray = allTweets;

    if (!name || !tweet) {
      setToastProp({ open: true, text: "WARNING: All fields are required." });
    } else {
      formValue.time = moment.now();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
      setToastProp({ open: true, text: "Tweet Sent" });
      closeModal();
    }
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
