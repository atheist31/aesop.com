import { useEffect, useState } from "react";
import "./body.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { width } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MenuIcon from "@mui/icons-material/Menu";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        background: "#333",
        width: "100px",
        height: "100px",
        position: "absolute",
        right: 0,
        bottom: "170px",
        cursor: "pointer",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <ChevronRightIcon fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        background: "#333",
        position: "absolute",
        left: 0,
        top: "120px",
        width: "100px",
        height: "100px",
        zIndex: "100",
        cursor: "pointer",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <ChevronLeftIcon fontSize="large" />
    </div>
  );
}

function Body() {
  const [browseColor, setBrowseColor] = useState("white");
  const [browseBackground, setBrowseBackground] = useState("none");
  const [discoverColor, setDiscoverColor] = useState("black");
  const [discoverBackground, setDiscoverBackground] = useState("none");
  const [findColor, setFindColor] = useState("black");
  const [findBackground, setFindBackground] = useState("none");
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    autoplaySpeed: 10,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };

  const slick1 = [
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Refresh-Bar-Soap-150g-Web-Front-Large-1800x1093px.png?context=bWFzdGVyfGltYWdlc3w0NDc4NjJ8aW1hZ2UvcG5nfGFERTFMMmc0WlM4eE1URTNNakE1TURZd09UWTVOQzlCWlhOdmNGOUNiMlI1WDFKbFpuSmxjMmhmUW1GeVgxTnZZWEJmTVRVd1oxOVhaV0pmUm5KdmJuUmZUR0Z5WjJWZk1UZ3dNSGd4TURremNIZ3VjRzVufDg0YWNhNzcxYTMzM2FhOTg0Mzg4ZTlkZjlkNDE0OGQyN2FmNDA3N2EyNDBlZTVhOWIwNDhjNDE0MWE0NzFhZGE",
      head: "Nurture Bar Soap",
      body: "offers a mild yet effective cleanse",
      width: "470px",
      height: "300px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Nurture-Bar-Soap-150g-Web-Front-Large-1800x1093px.png?context=bWFzdGVyfGltYWdlc3w0Njk1Mzd8aW1hZ2UvcG5nfGFEVTBMMmhqTUM4eE1URTRNak16TVRjeU16Z3dOaTlCWlhOdmNGOUNiMlI1WDA1MWNuUjFjbVZmUW1GeVgxTnZZWEJmTVRVd1oxOVhaV0pmUm5KdmJuUmZUR0Z5WjJWZk1UZ3dNSGd4TURremNIZ3VjRzVufDY0NDY0NjU1MTFkOGUwODk3Zjc4N2YyZmM2OGYzNzVhMjIzNWRhNzBjZDU3YWQ4YTkyYWRhOWEwNGVlZjg3Mzc",
      head: "polish Bar Soap",
      body: "Thoroughly cleanses and exfoliates skin",
      width: "470px",
      height: "300px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Polish-Bar-Soap-150g-Web-Front-Large-1800x1093px.png?context=bWFzdGVyfGltYWdlc3w0NjIzNDZ8aW1hZ2UvcG5nfGFHRTBMMmhoWXk4eE1URTRNak16TVRFNU9UVXhPQzlCWlhOdmNGOUNiMlI1WDFCdmJHbHphRjlDWVhKZlUyOWhjRjh4TlRCblgxZGxZbDlHY205dWRGOU1ZWEpuWlY4eE9EQXdlREV3T1ROd2VDNXdibWN8NmNlYjkxN2RmMmIyYjMwNDI5OGEwMzY3ODMzYWM3ZTY2Y2QyOTc0NWE3OGZlYWU3YzM4MGU0ZDYzOTUzYzIzYg",
      head: "Refresh Bar Soap",
      body: "Offers a though and enlivening cleanse",
      width: "470px",
      height: "300px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Refresh-Body-Cleansing-Slab-310g-Carton-Front-Large-1800X1093px.png?context=bWFzdGVyfGltYWdlc3w2NjUxNzF8aW1hZ2UvcG5nfGFEUTBMMmc1T1M4eE1URTRPRE0xTURZNE1URXhPQzlCWlhOdmNGOUNiMlI1WDFKbFpuSmxjMmhmUW05a2VWOURiR1ZoYm5OcGJtZGZVMnhoWWw4ek1UQm5YME5oY25SdmJsOUdjbTl1ZEY5TVlYSm5aVjh4T0RBd1dERXdPVE53ZUM1d2JtY3w2MzJiMjBhZWZkOWEwZmIzYWVlMGE0M2JhNmI0ZmIzODI2MDllNmNkZGI3MmIxNDU5OWQ2YjQyZDFkYWU1Zjdh",
      head: "Refresh Body Cleansing Slab",
      body: "Leaves skin supple, nourished",
      width: "430px",
      height: "250px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png",
      head: "Mandarin Facial Hydrating Cream",
      body: "Rapidly absorbed, lightly hydrating",
      width: "370px",
      height: "196px",
    },
  ];
  const slick4 = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png",
      head: "Bronze Incense Holder",
      body: "offers a mild yet effective cleanse",
      width: "430px",
      height: "250px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png",
      head: "Ptolemy Aromatique Candle",
      body: "Thoroughly cleanses and exfoliates skin",
      width: "430px",
      height: "280px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Other-Aesop-Book-1-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wzMTU0MTB8aW1hZ2UvcG5nfGFXMWhaMlZ6TDJnME5DOW9PR1l2T1RFME5EZzJNVFExT0RRMk1pNXdibWN8NjJlOWIzZmJjZWQyOTk5ZDZmZjE5M2NkMjExNGRjZDAxOTk0ZTc0ZjAzZGU2NjViODQ4YmE0NjcxZWI2NTU3Mw",
      head: "Aesop: the book",
      body: "Offers a though and enlivening cleanse",
      width: "430px",
      height: "280px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Home-Brass-Oil-Burner-large.png?context=bWFzdGVyfGltYWdlc3wxNzg0ODA1fGltYWdlL3BuZ3xhVzFoWjJWekwyaGxPQzlvWVRJdk9Ea3pOVGd5TVRVd09EWXpPQzV3Ym1jfDM1NGE2NGEyZjJlMTAwMWNlMWU0MDIwYmFiYTNhYWMwNGFkZjUxZDAwMTMzMDdiMDAyYmIwNDgzNDljZGFlMTk",
      head: "Refresh Body Cleansing Slab",
      body: "Leaves skin supple, nourished",
      width: "430px",
      height: "250px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png",
      head: "Mandarin Facial Hydrating Cream",
      body: "Rapidly absorbed, lightly hydrating",
      width: "370px",
      height: "196px",
    },
  ];

  const slick2 = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png",
      head: "Fabulous Face Cleanser",
      body: "For skin requiring gengle cleansing",
      width: "390px",
      height: "390px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Protective-Body-Lotion-SPF50-Asia-EU-150mL-Web-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMzAwMjV8aW1hZ2UvcG5nfGFXMWhaMlZ6TDJnNU5pOW9NVE12TVRBeE1EZzRNRFEyT1RRd05EWXVjRzVufDNjODEzMWJmOGMzZGY0YzNjMjFkZDZmOGNmNGVhMzhiNzQyZDQyYWI3NDgyMmFiZDU0NGQ1YmExMDM5NjAyOTc",
      head: "Purifying Facial cream Cleanser",
      body: "Ideal for city dwellers",
      width: "390px",
      height: "390px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-Web-Front-Large-900x1068px.png?context=bWFzdGVyfGltYWdlc3wyNDg0ODZ8aW1hZ2UvcG5nfGFHRXpMMmcxWXk4eE1USXhOamswTURZek1EQTBOaTlCWlhOdmNGOUNiMlI1WDBkbGNtRnVhWFZ0WDB4bFlXWmZRbTlrZVY5VFkzSjFZbDh4T0RCdFRGOVhaV0pmUm5KdmJuUmZUR0Z5WjJWZk9UQXdlREV3Tmpod2VDNXdibWN8MjMyZjE5OTUyMjQ1MDgwNTEzMGNkMTgyODQyZGNlZGFkMDBmNmVjMjFlNDgzNWQ5MjJiZDkxMjBiZGQ1NTMyZA",
      head: "Geranium Leaf Body Cleanser",
      body: "A gentle, invigorating gel cleanser",
      width: "347px",
      height: "399px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Body-Resolute-Hydrating-Body-Balm-100mL-Hybris-Large-843x1000px.png?context=bWFzdGVyfGltYWdlc3wxNzI3NTh8aW1hZ2UvcG5nfGFXMWhaMlZ6TDJneVpDOW9ZMk12T1RVMU56a3lNak00TVRnMU5DNXdibWN8MzNmMWE5N2IxODkxN2IyNjdiZjdiNTgxNDM3MTc2YzZiMzc1YTM1Yzg2NzFjNDZlZDAwYmViNjdiODAzNTM3MQ",
      head: "Shampoo",
      body: "For soft, shiny fragrant hair",
      width: "322px",
      height: "399px",
    },
    {
      img: "https://www.aesop.com/medias/Aesop-Bundle-Marrakech-Intense-Ensemble-Hybris-Large-960x1090px.png?context=bWFzdGVyfHJvb3R8MjIzNDQ5fGltYWdlL3BuZ3xhR000TDJneU5TODVOVGc1Tnprd09UazROVFU0TG5CdVp3fGM0NmNlZjJkNjQ0NTI4MzIwMjJiZDZmMTBmYjdjNmE1NTZhNjM1MTNiNzU5ODcxMDAxZmNhZmRiZWY4NTU5NTg",
      head: "A Rose By Any Other name Body Cleanser",
      body: "A gently cleansing aromatic formulation",
      width: "322px",
      height: "399px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2Gyl6pSrgwsvcYkD1dSGNY/11a1085f11c9be33e2481b411057b9b5/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_500mL_large.png",
      head: "Citrus Melange Body Cleanser",
      body: "For all who savour citrus aromas",
      width: "322px",
      height: "399px",
    },
  ];

  const slick3 = [
    "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="body-1">
        {windowSize.width > 640 ? (
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              paddingLeft: "50px",
            }}
          >
            {/* <div
              style={{
                fontSize: "40px",
              }}
            >
              AesopCopyrightIcon
            </div> */}
            <div style={{ height: "50px", fontSize: "40px" }}>
              Aesop
              <CopyrightIcon
                style={{
                  marginRight: "4px",
                  marginUp: "20px",
                  fontSize: "10px",
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "50px",
              }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "20px" }}>Bar Soaps</h1>
              <h1 style={{ fontWeight: "400", fontSize: "30px" }}>
                A Body care classic,
                <br /> reimagined
              </h1>
              <div
                style={{
                  width: "380px",
                  fontSize: "16px",
                  lineHeight: "180%",
                }}
              >
                breathing new life into the humble bar soap are
                <br /> Nurture, Polish and Refresh-three additions to the
                <br /> range,each imparting a unique constellation of benefits.
              </div>
              <div
                onMouseEnter={() => {
                  setBrowseBackground("white");
                  setBrowseColor("black");
                }}
                onMouseLeave={() => {
                  setBrowseBackground("none");
                  setBrowseColor("white");
                }}
                style={{
                  color: "#f1c694",
                  background: browseBackground,
                  cursor: "pointer",
                  border: "1px solid white",
                  width: "330px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    marginLeft: "20px",
                  }}
                >
                  Discover Bar Soaps
                </div>
                <ArrowForwardIcon
                  style={{ marginLeft: "130px" }}
                  fontSize="small"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div style={{ color: "white", paddingTop: "10px" }} className="row">
              <div style={{ fontSize: "24px" }} className="col-7">
                Aesop
              </div>
              <div
                style={{ display: "flex", paddingLeft: "30px" }}
                className="col-5"
              >
                <SearchIcon
                  style={{ cursor: "pointer" }}
                  className=""
                  fontSize="medium"
                />
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginRight: "20px",
                  }}
                  className="nav-tags"
                >
                  Cart
                </div>
                <MenuIcon style={{ cursor: "pointer" }} fontSize="medium" />
              </div>
            </div>
          </div>
        )}
      </div>
      {windowSize.width < 640 ? (
        <div
          style={{
            background: "#333",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div
            style={{
              marginLeft: "10%",
            }}
          >
            <h1 style={{ fontWeight: "400", fontSize: "30px" }}>
              In boldness, a bond
            </h1>
            <div
              style={{
                fontSize: "16px",
                width: "80%",
                lineHeight: "180%",
              }}
            >
              Celebrating the power of self-expression this Lunar New Year
              through gestures replete with character.
            </div>
            <div
              onMouseEnter={() => {
                setBrowseBackground("white");
                setBrowseColor("black");
              }}
              onMouseLeave={() => {
                setBrowseBackground("none");
                setBrowseColor("white");
              }}
              style={{
                color: browseColor,
                background: browseBackground,
                cursor: "pointer",
                border: "1px solid white",
                width: "300px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  marginLeft: "20px",
                }}
              >
                Browse all gifts
              </div>
              <ArrowForwardIcon
                style={{ marginLeft: "130px" }}
                fontSize="small"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="body-2">
        <Slider {...settings}>
          {slick1.map((ele) => (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <img
                  style={{ height: ele.height, width: ele.width }}
                  src={ele.img}
                ></img>
                <a className="slick-a">{ele.head}</a>
                <div>{ele.body}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="body-3">
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "70%",
            marginLeft: "5%",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            The athenaeum
          </div>
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Noto Sans Traditional Chinese",
              marginTop: "20px",
            }}
          >
            The warm-up
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.{" "}
          </div>
          <div
            onMouseEnter={() => {
              setDiscoverBackground("#333");
              setDiscoverColor("white");
            }}
            onMouseLeave={() => {
              setDiscoverBackground("none");
              setDiscoverColor("black");
            }}
            style={{
              color: discoverColor,
              background: discoverBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "300px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Read more
            </div>
            <ArrowForwardIcon style={{ marginLeft: "30px" }} fontSize="small" />
          </div>
        </div>
        <div
          style={{
            width: windowSize.width > 960 ? "60%" : "80%",
            marginTop: windowSize.width > 960 ? 0 : "50px",
          }}
        >
          <img
            style={{
              height: windowSize.width > 960 ? "470px" : "350px",
              width: "100%",
              marginLeft: "5%",
            }}
            src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
          ></img>
        </div>
      </div>
      <div className="body-2">
        <Slider {...settings}>
          {slick2.map((ele) => (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <img
                  style={{ height: ele.height, width: ele.width }}
                  src={ele.img}
                  alt=""
                />
                <p className="slick-a" >{ele.head}</p>
                <div>{ele.body}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="body-5">
        {/* <img
        alt=""
          style={{
            height: windowSize.width > 960 ? "470px" : "350px",
            width: "80%",
            // marginLeft: "5%",
          }}
          src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
        /> */}
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "80%",
            marginTop: windowSize.width > 960 ? "0" : "50px",
            marginLeft: "5%",
          }}
        >
          {/* <div
            style={{
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            The Athenaem
          </div> */}
          
          <div
            style={{
              fontSize: "28px",
              fontFamily: "Noto Sans Traditional Chinese",
              marginTop: "20px",
            }}
          >
            Post-Poo Drops has returned
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </div>
          <div
            onMouseEnter={() => {
              setDiscoverBackground("#333");
              setDiscoverColor("white");
            }}
            onMouseLeave={() => {
              setDiscoverBackground("none");
              setDiscoverColor("black");
            }}
            style={{
              color: discoverColor,
              background: discoverBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "350px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "15px",
              }}
            >
              Discover post-Poo Drops
            </div>
            <ArrowForwardIcon
              style={{ marginLeft: "130px" }}
              fontSize="small"
            />
          </div>
        </div>
        <div>
          {/* yaha image dal dena */}
        </div>
      </div>
      <div className="body-2">
        <Slider {...settings}>
          {slick4.map((ele) => (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <img
                  style={{ height: ele.height, width: ele.width }}
                  src={ele.img}
                ></img>
                <a className="slick-a">{ele.head}</a>
                <div>{ele.body}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="body-6">
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "80%",
            marginLeft: "5%",
          }}
        >
          <div style={{ fontSize: "28px", marginTop: "20px" }}>
            Store locator
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            Our consultants are available to host you in-
            <br />
            store and provide tailored guidance <br /> on gift purchases
          </div>
          <div
            onMouseEnter={() => {
              setFindBackground("#333");
              setFindColor("white");
            }}
            onMouseLeave={() => {
              setFindBackground("none");
              setFindColor("black");
            }}
            style={{
              color: findColor,
              background: findBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "300px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Find a nearby store
            </div>
            <ArrowForwardIcon
              style={{ marginLeft: "100px" }}
              fontSize="small"
            />
          </div>
        </div>
        <div
          style={{
            width: windowSize.width > 960 ? "60%" : "90%",
            marginTop: windowSize.width > 960 ? 0 : "50px",
            marginLeft: "5%",
            height: windowSize.width > 960 ? "442px" : "350px",
          }}
        >
          <Slider {...settings2}>
            {slick3.map((ele) => (
              <div>
                <img
                  src={ele}
                  width="100%"
                  height={windowSize.width > 960 ? "442px" : "350px"}
                ></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        style={{
          color: "gray",
          // border:"1px solid red",
          // padding: "40px",
          marginTop: "60px",
          textAlign: "center",
          width: "100%",
          fontSize: "18px",
        }}
      >
        Aesop MOKO
      </div>
      <div
        style={{
          marginTop: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "200px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div style={{ fontSize: "30px", textAlign: "center" }}>
          ‘Life never becomes a habit to me. It's always a<br />
          marvel.’
        </div>
        <div style={{ fontWeight: "600", marginTop: "30px" }}>
          katherine Mansfield
        </div>
      </div>
    </div>
  );
}

export default Body;
