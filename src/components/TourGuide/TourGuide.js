import React, { useState } from "react";
import guide from "../../assets/images/javi-tour.jpg";
import SimpleAccordion from "../Accordian";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./TourGuide.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EuroIcon from "@material-ui/icons/Euro";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import Button from "@material-ui/core/Button";

let detail =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae dolores ad veniam quae impedit omnis quam, odio ipsa, commodi corporis voluptatem modi nemo perspiciatis ipsum sed esse! Dignissimos amet reprehenderit, nisi similique quisquam temporibus animi recusandae sapiente deleniti aliquid labore, modi quaerat at unde quae nesciunt! Nobis, perferendis explicabo.";
let heading = "What places do you know";

const TourGuide = () => {
  const [value, setValue] = useState(0);
  const [value1] = useState(5);
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  let shouldShow = show ? "" : "hide";
  function handleSubmit(e) {
    e.preventDefault();
    setReviews((prev) => [...prev, { value, comment }]);
    console.log(reviews);
    setShow(false);
    setComment("");
    setValue(0);
  }
  return (
    <div className="tour-guide" style={{ margin: "20px 10%" }}>
      <h1>Name</h1>
      <span>
        <Box
          component="fieldset"
          borderColor="transparent"
          className="read-only-rating"
        >
          <Rating name="read-only" value={value1} readOnly />
        </Box>
      </span>
      <span>4.98 (56 reviews)</span>
      <div className="guide-images">
        <img src={guide} alt="" />
        <img src={guide} alt="" />
        <img src={guide} alt="" />
        <img src={guide} alt="" />
      </div>
      <div className="introduction">
        <h1>Introduction</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          incidunt unde enim nihil sunt aliquam perspiciatis, iste debitis
          doloremque deserunt eveniet adipisci accusantium eaque, consectetur
          soluta tempora quasi nisi mollitia neque doloribus quisquam?
          Voluptatibus commodi voluptate nihil vero ipsa voluptatem aliquid,
          reprehenderit numquam sint deleniti cupiditate, reiciendis quos! Sequi
          quo voluptatum explicabo laborum illum facere impedit expedita error
          deserunt ut, rerum facilis ipsum aut ipsam animi a molestiae fuga qui
          dolor necessitatibus modi ex commodi repellat. Modi placeat ut
          nesciunt.
        </p>
      </div>
      <div className="general-information">
        <h1>General Information</h1>
        <p>
          <span className="icon-gi" style={{ fontWeight: "bold" }}>
            <AccessTimeIcon className="icon" /> Hours:{" "}
          </span>
          10:30, 15:30 (it is mandatory to go with a confirmed reservation)
        </p>
        <p>
          <span className="icon-gi">
            <EuroIcon className="icon" /> Price:{" "}
          </span>
          Free (you choose the price)
        </p>
        <p>
          <span className="icon-gi">
            <HourglassFullIcon className="icon" /> Duration:{" "}
          </span>
          3 hours (approximately)
        </p>
      </div>
      <div className="tour-milan">
        <h1>Free Tour Milan</h1>
        <SimpleAccordion detail={detail} heading={heading} />
        <br />
        <SimpleAccordion detail={detail} heading={heading} />
      </div>
      <div className="meeting-point">
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
        <h1>Reviews ({reviews.length})</h1>
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
        <button
          className="submit"
          onClick={() => setShow(true)}
          style={{ marginBottom: 10 }}
        >
          Post your review
        </button>
        <form className={`${shouldShow}`} onSubmit={handleSubmit}>
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <label htmlFor="comment">Your Comments: </label>
          <br />
          <textarea
            name="comment"
            value={comment}
            id="comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TourGuide;
