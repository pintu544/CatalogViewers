import React from "react";
import { createTheme } from "@mui/material";
import { Typography, Paper, IconButton } from "@mui/material";
import { PlayArrow, Pause, ArrowRight, ArrowLeft } from "@mui/icons-material";

import "./CatalogViewer.css";

const useStyles = createTheme((theme) => ({
  root: {
    width: "100vw",
    height: "400px",
    display: "flex",
    position: "relative",
  },
  imageWrapper: {
    width: "60%",
    height: "100%",
    position: "relative",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: "#fff",
    opacity: 0.5,
    transition: "opacity 0.2s ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
  thumbnailWrapper: {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    margin: theme.spacing(2, 0),
    "&::-webkit-scrollbar": {
      height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      margin: theme.spacing(0, 1),
      cursor: "pointer",
      transition: "opacity 0.2s ease-in-out",
      filter: "grayscale(100%)",
      "&:hover": {
        opacity: 0.7,
      },
      "&.active": {
        filter: "none !important",
      },
    },
  },
}));

const CatalogViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [images, isPlaying]);

  return (
    <Paper className={`${useStyles.root} container`}>
      <div className="mainContainer">
        <div className={useStyles.imageWrapper} style={{ display: "flex" }}>
          <img
            className={`${useStyles.image} mainImg`}
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
          />
        </div>

        <div className={`${useStyles.buttonWrapper} warpper`}>
          <IconButton className={useStyles.iconButton} onClick={handlePrevious}>
            <ArrowLeft className="arrow" />
          </IconButton>

          <div className={useStyles.thumbnailWrapper}>
            {images.map((image, i) => (
              <img
                key={i}
                className={`imagess ${useStyles.thumbnail} ${
                  currentIndex === i && "active"
                }`}
                src={image.src}
                alt={image.caption}
                onClick={() => handleThumbnailClick(i)}
              />
            ))}
          </div>

          <IconButton className={useStyles.iconButton} onClick={handleNext}>
            <ArrowRight className="arrow" />
          </IconButton>
        </div>
      </div>

      <div className="bottomImg">
        <div className={useStyles.details}>
          {
            <Typography variant="h6" className={useStyles.caption}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginLeft: "20px",
                }}
              >
                <h2>{images[currentIndex].caption}</h2>

                <p
                  style={{
                    textAlign: "justify",
                    margin: "0px",
                    fontSize: "15px",
                  }}
                >
                  {images[currentIndex].desc}
                </p>
              </div>
            </Typography>
          }
        </div>
        <div className="pause">
          <IconButton
            className={useStyles.iconButton}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

export default CatalogViewer;
