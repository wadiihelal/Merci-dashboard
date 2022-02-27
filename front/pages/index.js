import Home from "../src/Home/components/Home";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <style jsx global>{`
      @media (max-width: 480px) {
        iframe {
          width: 100%;
        }
      }

      button:focus {
        outline: 0;
      }

      .btn:focus {
        outline: none !important;
        outline-offset: none !important;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    `}</style>
    <Home users={props.props.users} isMobile={props.isMobile} />
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:4000/api/message");
  const data = await res.json();

  return {
    props: {
      users: data
    }
  };
};

export default Index;
