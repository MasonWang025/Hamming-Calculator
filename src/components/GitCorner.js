import React from "react";
import GithubCorner from "react-github-corner";

export default function GitCorner() {
  let getWidth = () =>
    window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  const [width, setWidth] = React.useState(getWidth());

  React.useEffect(() => {
    var handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      <div>
        <GithubCorner
          href={"https://github.com/MasonWang025/Hamming-ECC-Magic"}
          bannerColor="#042129"
          octoColor="#FDF6E3"
          size={width >= 992 ? 115 : 55}
          direction="right"
        />
      </div>
    </div>
  );
}
