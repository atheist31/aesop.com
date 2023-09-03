import "./footer.css";
import { useEffect, useState } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Checkbox } from "@mui/material";

function Footer() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(window.innerWidth);
      console.log(windowSize);
    });
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "60px",
        background: "#252525",
        color: "white",
        maxWidth: "100%",
        lineHeight: "2",
      }}
    >
      <div className="row">
        <div
          className="col-sm-12 col-md-5"
          style={{
            marginTop: "30px",
          }}
        >
          <div style={{ marginLeft: "2px" }} className="row">
            Subscribe to Aesop communications
          </div>
          <hr className="footer-hr"></hr>
          <input
            className="email"
            style={{
              background: "none",
              border: "1px solid white",
              width: "80%",
              marginBottom: "20px",
            }}
            type="text"
            placeholder="Email address"
          ></input>
          <div style={{ width: "80%", display: "flex" }}>
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
            <div style={{ marginLeft: "5px", lineHeight: "1.7" }}>
              Subscribe to receive communications from Aesop about our products
              and services. By subscribing, you confirm you have read and accept
              our
            </div>
          </div>
          <div style={{ marginLeft: "45px" }} className="footer-link">
            Privacy policy
            {/* <NorthEastIcon fontSize="10px" /> */}
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
          }}
          className="col-xs-5 col-sm-4 col-md-2"
        >
          <div style={{ fontWeight: "600" }}>Orders and support</div>
          <hr className="footer-hr"></hr>
          <div className="footer-content">
            Contact us <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            FAQs <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            Shipping <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            Returns <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">Order history </div>
          <div className="footer-content">Terms and conditions</div>
        </div>
        <div
          className="col-xs-5 col-sm-4 col-md-2"
          style={{
            marginTop: "30px",
          }}
        >
          <div style={{ fontWeight: "600" }}>Services</div>
          <hr className="footer-hr"></hr>
          <div className="footer-content">Live assistance</div>
          <div className="footer-content">Corporate gifts</div>
          <div className="footer-content">Facial appointments</div>
          <div className="footer-content">click and Collect</div>
          <div className="footer-content">Video consultation</div>
        </div>
        <div
          style={{ marginTop: "30px" }}
          className="col-xs-5 col-sm-4 col-md-2"
        >
          <div style={{ fontWeight: "600" }}>Location preferences</div>
          <hr className="footer-hr"></hr>
          <div className="footer-content">
            Shipping:{" "}
            <a style={{ color: "white" }} href="http://www.google.com">
              Hong Kong SAR,China
            </a>
          </div>
          <div className="footer-content">
            Language:{" "}
            <a style={{ color: "white" }} href="http://www.google.com">
              English
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "50px", width: "100%" }} className="row">
        <div className="col-xs-5 col-sm-4 col-5" style={{ marginTop: "30px" }}>
          <div style={{ fontWeight: "600" }}>Sustainability</div>
          <hr></hr>
          <div>
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </div>
        </div>
        <div
          style={{ marginTop: "30px" }}
          className="col-xs-5 col-sm-4 col-md-2"
        >
          <div style={{ fontWeight: "600" }}>About</div>
          <hr className="footer-hr"></hr>
          <div className="footer-content">Our Story</div>
          <div className="footer-content">Foundation</div>
          <div className="footer-content">Careers</div>
          <div className="footer-content">Privacy policy</div>
          <div className="footer-content">Accessability</div>
          <div className="footer-content">Cookie Policy</div>
        </div>
        <div
          className="col-xs-5 col-sm-4 col-md-2"
          style={{
            marginTop: "30px",
          }}
        >
          <div style={{ fontWeight: "600" }}>Social media</div>
          <hr className="footer-hr"></hr>
          <div className="footer-content">
            Instagram <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            Twitter <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            LinkedIn <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            WeChat <NorthEastIcon fontSize="10px" />
          </div>
          <div className="footer-content">
            Weibo <NorthEastIcon fontSize="10px" />
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{ height: "50px" }}>
        <CopyrightIcon fontSize="10px" style={{ marginRight: "4px" }} />
        Aesop
      </div>
    </div>
  );
}

export default Footer;
