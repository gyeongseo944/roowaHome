import "./MetaverseYouTube.scss";
import YouTube from "react-youtube";

function MetaverseYouTube() {
  return (
    <section className="metaverseYouTube">
      <YouTube
        videoId="iubVXEjw8lw"
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
      <div className="metaverseExplanation">
        <span>
          {"루와의 메타버스 마케팅은\n가장 클라이언트의 목적에 부합하는\n"}
          <strong>메타버스 컨셉</strong>과{" "}
          <string>월드맵 기획, 제작, 브렌디드 굿즈</string>
          {"를 포함한\n모든 활용과 "}
          <strong>홍보 서비스</strong>를 제공합니다
        </span>
      </div>
    </section>
  );
}

export default MetaverseYouTube;
