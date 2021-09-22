import React from "react";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";

interface DescriptionContainerProps {
  img: string;
  title: string;
  content: string;
}

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({
  img,
  title,
  content,
}) => {
  return (
    <>
      <Box
        component="img"
        src={img}
        alt="suitcase"
        sx={{ height: 150 }}
        className="ebank-button-border-radius-s1"
      />
      <Typography
        variant="h6"
        className="ebank-white-color-text"
        sx={{ my: 5 }}
      >
        {title}
      </Typography>
      <Typography variant="h5" className="ebank-white-color-text">
        {content}
      </Typography>
    </>
  );
};

export default DescriptionContainer;
