import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import image1 from "../../assets/images/article1.jpg";

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

export default function ArticleCard({ src, text }) {
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
          <h3>Impressive paella</h3>
          <p>Dated: 17-03-20</p>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
