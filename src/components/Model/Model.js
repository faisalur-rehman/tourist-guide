import React, { useState } from "react";
import { Modal, Button } from "antd";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const ReviewModel = ({
  show,
  setShow,
  value,
  setValue,
  comment,
  setComment,
  reviews,
  setReviews,
}) => {
  const [value1] = useState(5);
  //   const [value, setValue] = useState(0);
  //   const [show, setShow] = useState(false);
  //   const [comment, setComment] = useState("");
  //   const [reviews, setReviews] = useState([]);

  const handleOk = () => {
    setShow(false);
    setComment("");
    setValue(0);
  };

  const handleCancel = () => {
    setShow(false);
    setComment("");
    setValue(0);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setReviews((prev) => [...prev, { value, comment }]);
    // console.log(reviews);
    setShow(false);
    setComment("");
    setValue(0);
  }
  return (
    <>
      <Modal
        title="Post your Review"
        visible={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
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
            cols={24}
            rows={4}
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
      </Modal>
    </>
  );
};
export default ReviewModel;
