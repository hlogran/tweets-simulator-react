import React, { useState } from "react";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ModalContainer from "./components/ModalContainer";

function App() {
  const [toastProps, setToastProp] = useState({ open: false, text: null });

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProp={setToastProp} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={1500}
        message={<span id="message-id">{toastProps.text}</span>}
        onClose={() => {
          setToastProp({ open: false, text: toastProps.text });
        }}
      />
    </Container>
  );
}

export default App;
