import React from "react";

interface YouTubeProps {
  id: string;
}

export const YouTube: React.FC<YouTubeProps> = ({ id }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 ratio
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      ></iframe>
    </div>
  );
};
