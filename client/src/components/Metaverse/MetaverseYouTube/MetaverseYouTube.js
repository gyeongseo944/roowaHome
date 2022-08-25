import "./MetaverseYouTube.scss";
import YouTube from "react-youtube";

function MetaverseYouTube({ title, src }) {
  return (
    <section className="metaverseYouTube">
      <div className="metaverseTitle">{title}</div>
      <YouTube
        videoId={src}
        opts={{
          width: "100%",
          playerVars: {
            rel: 0,
            modestbranding: 1,
          },
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </section>
  );
}

MetaverseYouTube.defaultProps = {
  title: "metaverse marketing contents",
  src: "iubVXEjw8lw",
};

export default MetaverseYouTube;
