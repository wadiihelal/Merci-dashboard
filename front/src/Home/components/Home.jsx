import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "./pagination";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from "react-share";
import Background from "../../assets/images/team-doctor.jpeg";
import Router from "next/router";
const styles = {
  card: {},
  pseudo_card: {}
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 9
    };
  }

  render() {
    const { users } = this.props;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });
    const shareUrl = "https://www.mercipersonnelsoignant.fr";
    const title = "Offrez un merci  au personnel de santé !";

    return (
      <div
        style={{
          backgroundColor: "rgb(226, 226, 226, 0.3)",
          margin: 0
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            padding: 15,
            display: "grid",
            gridTemplateColumns: "100%",
            alignItems: "center",
            justifyItems: "center"
          }}
        >
          {" "}
          <ToastContainer autoClose={3000} hideProgressBar />
          <div className="bloc_header_title">
            <h1
              style={{
                textAlign: "center"
              }}
            >
              Thanks 
            </h1>
            <p style={{ textAlign: "center" }}>
            An initiative to enhance the effort of the medical staff and establish
              <br></br> a united connection between us in these times
              difficult.
            </p>
          </div>
          <div>
            <div>
              <button
                style={{
                  fontFamily: "Roboto Condensed",
                  boxShadow: "5px 5px 5px rgb(105,105,105)"
                }}
                onClick={() => Router.push("/message")}
                className="btn btn-light"
              >
                Leave a thank 
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            fontSize: 20,
            fontFamily: "Roboto Condensed",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)"
          }}
        >
          {users.length} Messages 🙏
        </div>
        <div className="container_message_card">
          {currentPosts.map(user => (
            <div
              className="card_message"
              style={{
                borderLeft: `5px #${(0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6)} solid`
              }}
              key={user._id}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: 5,
                    color: "#D3D5D3",
                    fontSize: 12
                  }}
                >
                  {user.date}
                </div>
                <div style={{ padding: 20 }}>
                  <h5 style={styles.pseudo_card}>{user.pseudo}</h5>
                  <p>{user.message}</p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "13% 13% 13% 13%",
                    justifyContent: "end",
                    marginRight: 10,
                    marginBottom: 10
                  }}
                >
                  <div className="Demo__some-network">
                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <TwitterShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <LinkedinShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <WhatsappShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            postsPerPage={this.state.postsPerPage}
            totalPosts={users.length}
            paginate={paginate}
          />
        </div>
        {/* <div
          style={{
            backgroundColor: "#1C74F4",
            padding: 20,
            color: "white",
            textAlign: "center",
            fontFamily: "Roboto Condensed"
          }}
        >
          © Développé par{" "}
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://tn.linkedin.com/in/wadii-helal-a74324176"
          >
            Wadii Helal
          </a>{" "}

        </div> */}
      </div>
    );
  }
}
