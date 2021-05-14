import React, { useState, useEffect } from "react";
import SimpleAccordion from "../Accordian";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./TourGuide.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EuroIcon from "@material-ui/icons/Euro";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
// import { Carousel } from "antd";
import "antd/dist/antd.css";
import Carousel from "../Carousel/Carousel";
import logo from "../../assets/images/corazon-cuore-2.svg";
import { useParams } from "react-router-dom";
import ReviewModel from "../Model/Model";
import { formGetData, formPostData, patchData } from "../Api/ApiRequest";

let detail =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae dolores ad veniam quae impedit omnis quam, odio ipsa, commodi corporis voluptatem modi nemo perspiciatis ipsum sed esse! Dignissimos amet reprehenderit, nisi similique quisquam temporibus animi recusandae sapiente deleniti aliquid labore, modi quaerat at unde quae nesciunt! Nobis, perferendis explicabo.";
let heading = "What places do you know";

const TourGuide = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [value1] = useState(5);
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [tourGuideData, setTourGuideData] = useState({});
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          `/tour-guide/${id}`,
          localStorage.getItem("token")
        );
        setTourGuideData(data.tourGuide);
        console.log(data);
      } catch (err) {
        // setError(err.response)
        console.log(err.response);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <nav className="main-menu">
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="logo Cuore tours" className="logo-img" />
              <span className="logo-text">Cuore Tours</span>
            </a>
          </div>
          <div className="main-menu__items">
            <ul>
              <li>
                <a href="#introduction">Introduction </a>
              </li>
              <li>
                <a href="#general-information">General Information</a>
              </li>
              <li>
                <a href="#meeting-point">Meeting Point </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="tour-guide" style={{ margin: "20px 10%" }}>
        <h1>Name</h1>
        <span>
          <Box
            component="fieldset"
            borderColor="transparent"
            className="read-only-rating"
          >
            <Rating name="read-only" value={tourGuideData.avgRating} readOnly />
          </Box>
        </span>
        <span>
          {tourGuideData.avgRating} ({tourGuideData.reviewCount} )
        </span>

        <div className="guide-images">
          <Carousel />
        </div>
        <div className="introduction" id="introduction">
          <h1>Introduction</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            incidunt unde enim nihil sunt aliquam perspiciatis, iste debitis
            doloremque deserunt eveniet adipisci accusantium eaque, consectetur
            soluta tempora quasi nisi mollitia neque doloribus quisquam?
            Voluptatibus commodi voluptate nihil vero ipsa voluptatem aliquid,
            reprehenderit numquam sint deleniti cupiditate, reiciendis quos!
            Sequi quo voluptatum explicabo laborum illum facere impedit expedita
            error deserunt ut, rerum facilis ipsum aut ipsam animi a molestiae
            fuga qui dolor necessitatibus modi ex commodi repellat. Modi placeat
            ut nesciunt.
          </p>
        </div>
        <div className="general-information" id="general-information">
          <h1>General Information</h1>
          <p>
            <span className="icon-gi" style={{ fontWeight: "bold" }}>
              <AccessTimeIcon className="icon" /> Hours:{" "}
            </span>
            {tourGuideData.hours} (it is mandatory to go with a confirmed
            reservation)
          </p>
          <p>
            <span className="icon-gi">
              <EuroIcon className="icon" /> Price:{" "}
            </span>
            {tourGuideData.price} (in euros)
          </p>
          <p>
            <span className="icon-gi">
              <HourglassFullIcon className="icon" /> Duration:{" "}
            </span>
            {tourGuideData.duration} hours (approximately)
          </p>
        </div>
        <div className="tour-milan">
          <h1>Free Tour Milan</h1>
          <SimpleAccordion detail={tourGuideData.places} heading={heading} />
          <br />
          <SimpleAccordion
            detail={tourGuideData.route}
            heading="What will be the routes?"
          />
        </div>
        <div className="meeting-point" id="meeting-point">
          <h1>Meeting Point</h1>
          <p>No meeting point</p>
        </div>
        <div className="faqs">
          <h1>Frequently Asked Questions</h1>
          <SimpleAccordion detail={detail} heading={heading} />
          <br />
          <SimpleAccordion detail={detail} heading={heading} />
          <br />
          <SimpleAccordion detail={detail} heading={heading} />
          <br />
          <SimpleAccordion detail={detail} heading={heading} />
        </div>
        <div className="reviews">
          <h1>Reviews ({tourGuideData.reviewCount})</h1>
          {reviews.map((review) => (
            <>
              <Box
                component="fieldset"
                borderColor="transparent"
                className="read-only-ratng"
              >
                <Rating name="read-only" value={review.value} readOnly />
              </Box>
              <p>
                <span>UserName: </span>07-07-2021
              </p>
              <p>{review.comment}</p>
            </>
          ))}
        </div>

        <div className="add-review">
          {localStorage.getItem("token") && (
            <button
              className="submit"
              onClick={() => setShow(true)}
              style={{ marginBottom: 10 }}
            >
              Post your review
            </button>
          )}
          {show && (
            <ReviewModel
              show={show}
              setShow={setShow}
              comment={comment}
              setComment={setComment}
              value={value}
              setValue={setValue}
              reviews={reviews}
              setReviews={setReviews}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TourGuide;
