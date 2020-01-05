import React from "react";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ModalContainer from "./components/ModalContainer";

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet />
      <ModalContainer></ModalContainer>
    </Container>
  );
}

export default App;
