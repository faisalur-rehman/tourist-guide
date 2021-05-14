import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import image1 from "../../assets/images/article1.jpg";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    margin: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  text: {
    fontSize: "1.1rem",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProfileCard({ src, text }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image1} title="Paella" />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          <h3>Name</h3>
          <p className="guide-text">Guide: Milan</p>
          <div style={{ display: "flex" }}>
            <span>Rating: </span>
            <Box
              component="fieldset"
              borderColor="transparent"
              className="read-only-ratng"
            >
              <Rating name="read-only" value={4} readOnly />
            </Box>
            <p>(56)</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
