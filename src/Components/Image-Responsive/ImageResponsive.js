import React from "react";

export default function Image({ src, alt, width, height }) {
  const ImageWrapper = {
    width: `${width}%`,
    paddingTop: `${height}%`,
    position: "relative",
    backgroundColor: "grey",
  };

  const ImageResp = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
  };

  return (
    <div style={ImageWrapper}>
      <img style={ImageResp} src={src} alt={alt} />
    </div>
  );
}
