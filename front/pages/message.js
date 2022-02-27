import Message from "../src/Message/components/Message";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

export default function Index(props) {
  return (
    <div>
      <Message isMobile={props.isMobile} />
    </div>
  );
}
