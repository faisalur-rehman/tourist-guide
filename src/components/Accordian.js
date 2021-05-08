import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: "blue",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ detail, heading }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{}}>
      <Accordion style={{ backgroundColor: "#F7FAFC" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{detail}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
