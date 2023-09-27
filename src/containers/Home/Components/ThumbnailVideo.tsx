import { Box, styled } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRef, useEffect } from "react";

const ThumbnailVideo = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "800",
    width: "100%",

    playerVars: {
      autoplay: 1,
      controls: 0,
      enablejsapi: 1,
      playsinline: 1,
      rel: 0,
      hd: 1,
    },
  };
  return (
    <Container>
      {/* <YouTube
  videoId="JPe2mwq96cw"
  opts={opts}
  onReady={onPlayerReady}
  onStateChange={(event) => {
    event.target.playVideo();
  }}
  onPlaybackQualityChange={(event) => {
    console.log(event);
    event.target.playVideo();
  }}
  iframeClassName={"iframe"}
/> */}

      <iframe
        src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&mute=1&controls=0&fbclid=IwAR2QcnKTOkcLism1NQtSSoQm-Bm5E8HBp3T-No7wR30q4ONzzV_4DoPFY0Q"
        width={"100%"}
        height={800}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="iframe"
      ></iframe>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["&  .iframe"]: {
      pointerEvents: "none",
    },
  };
});

export default ThumbnailVideo;
