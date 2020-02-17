import React, { Component } from "react";
import TabBar from "./tabBar";
import CPPUse from "./CPPUse/CPPUse";

class CodingPage extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-12">
        <div
          className="row"
          style={{
            height: "86vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TabBar />
          <div className="mainTab" id="style-1">
            <div
              className="questionArea"
              style={{
                height: "60vh",
                width: "79vw",
                background: "rgba(8, 8, 15, 0.8)",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px"
              }}
            >
              Question
            </div>
            <div
              style={{
                height: "75vh",
                width: "79vw",
                marginTop: "2vh",
                backgroundColor: "black",
                display: "block",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <span style={{ display: "flex" }}>
                <CPPUse />
                <span style={{ marginLeft: "40vw" }}>
                  <button
                    className="btn btn-dark"
                    style={{
                      marginRight: "2vw",
                      outline: "none",
                      border: "none",
                      marginTop: "1vh"
                    }}
                  >
                    Browse File
                  </button>
                  <button
                    className="btn btn-dark"
                    style={{
                      outline: "none",
                      border: "none",
                      marginTop: "1vh"
                    }}
                  >
                    Load Buffer
                  </button>
                </span>
              </span>
              <textarea
                name="codeEditor"
                id=""
                cols="150"
                rows="20"
                style={{ resize: "none", overflow: "hidden", marginTop: "1vh" }}
              ></textarea>
              <span style={{ marginLeft: "63vw" }}>
                <button
                  className="btn btn-dark"
                  style={{
                    marginRight: "2vw",
                    outline: "none",
                    border: "none",
                    width: "6vw"
                  }}
                >
                  Submit
                </button>
                <button
                  className="btn btn-dark"
                  style={{ outline: "none", border: "none", width: "6vw" }}
                >
                  Run
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CodingPage;
