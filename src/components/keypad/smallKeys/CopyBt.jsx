import React from "react";
import "./CopyBt.css";
import ConfettiExplosion from "react-confetti-explosion";

const Cicon = () => {
  return (
    <svg
      className="keyIcon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style={{ enableBackground: "new 0 0 24 24" }}
      xmlSpace="preserve"
    >
      <path d="M21.803,7.222L16.181,1.6c-0.222-0.222-0.53-0.35-0.845-0.35H9.611c-1.646,0-2.986,1.34-2.986,2.986v1.194H4.833  c-1.646,0-2.986,1.34-2.986,2.986v11.347c0,1.646,1.34,2.986,2.986,2.986h9.556c1.646,0,2.986-1.34,2.986-2.986v-1.194h1.792  c1.646,0,2.986-1.34,2.986-2.986V8.067C22.153,7.752,22.025,7.444,21.803,7.222z M16.181,3.289l3.933,3.933h-2.142  c-0.988,0-1.792-0.804-1.792-1.792V3.289z M16.181,19.764c0,0.988-0.804,1.792-1.792,1.792H4.833c-0.988,0-1.792-0.804-1.792-1.792  V8.417c0-0.988,0.804-1.792,1.792-1.792h5.375v2.986c0,1.646,1.34,2.986,2.986,2.986h2.986V19.764z M11.403,9.611V7.47l3.933,3.933  h-2.142C12.206,11.403,11.403,10.599,11.403,9.611z M20.958,15.583c0,0.988-0.804,1.792-1.792,1.792h-1.792v-5.128  c0-0.314-0.128-0.622-0.35-0.845L11.403,5.78c-0.222-0.222-0.53-0.35-0.845-0.35H7.819V4.236c0-0.988,0.804-1.792,1.792-1.792h5.375  v2.986c0,1.646,1.34,2.986,2.986,2.986h2.986V15.583z" />
    </svg>
  );
};

const Dicon = () => {
  return (
    <svg
      className="keyIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0.5 0.5 8 8"
      version="1.1"
      x="0px"
      y="0px"
    >
      <g>
        <path
          style={{
            color: "#000000",
            paintOrder: "fill markers stroke",
          }}
          d="m 4.4986927,1.3229162 c -1.750512,0 -3.175776,1.425265 -3.175776,3.175774 0,1.750512 1.425264,3.174227 3.175776,3.174227 1.75051,0 3.174224,-1.423715 3.174224,-3.174227 0,-1.750509 -1.423714,-3.175774 -3.174224,-3.175774 z m 0,0.52921 c 1.464504,0 2.645015,1.182061 2.645015,2.646564 0,1.464506 -1.180511,2.645017 -2.645015,2.645017 -1.464506,0 -2.646566,-1.180511 -2.646566,-2.645017 0,-1.464503 1.18206,-2.646564 2.646566,-2.646564 z m 1.316822,1.371087 a 0.26460502,0.26460502 0 0 0 -0.181916,0.09199 l -1.553003,1.802621 -0.72818,-0.751954 a 0.26460502,0.26460502 0 0 0 -0.375201,-0.0036 0.26460502,0.26460502 0 0 0 -0.0041,0.373135 l 0.928184,0.958674 a 0.26463148,0.26463148 0 0 0 0.390706,-0.01137 l 1.742154,-2.023812 a 0.26460502,0.26460502 0 0 0 -0.02739,-0.373135 0.26460502,0.26460502 0 0 0 -0.191218,-0.06253 z"
          fillRule="evenodd"
          fill="#00FF00"
          strokeWidth="1.00008"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const format = (isAbMode, arr, divisionInfo) => {
  let str = `~ *_${
    isAbMode ? "ABSENTEES" : "PRESENTEES"
  } REPORT._*\n————————————————\n🗓️  *${new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date())
    .replace(" ", ", ")}*\n🏫  *${divisionInfo.name}*\n————————————————\n`;
  for (let i = 0; i < arr.length; i++) {
    let item_str = [arr[i].no, arr[i].name];
    str += `_(${("0" + item_str[0]).slice(-2)})_\t *${item_str[1]}*\n`;
  }
  str += "————————————————";
  str += `\n${
    isAbMode ? "⛔  *Total Absentees:*" : "👥  *Total Presentees:*"
  } ${arr.length}
${isAbMode ? "👥  *Presentees:*" : "⛔  *Absentees:*"} ${
    divisionInfo.length - arr.length
  }/${divisionInfo.length} _(${
    Math.round((1 - arr.length / divisionInfo.length) * 100) + "%"
  })_
————————————————\n`;
  return str;
};

function CopyBt({ isAbMode, divisionInfo, list }) {
  const [icon, setIcon] = React.useState("copy");
  const formattedText = format(
    isAbMode,
    [...list].sort((a, b) => a.no - b.no),
    divisionInfo
  );
  return (
    <>
      <button
        className="Ckey"
        style={{
          backgroundColor: icon === "copy" ? "#272727" : "#1f2922",
          cursor: "pointer",
        }}
        onClick={() => {
          setIcon("copied");
          navigator.clipboard.writeText(formattedText);
          setTimeout(() => setIcon("copy"), 3000);
        }}
      >
        {icon === "copied" && (
          <ConfettiExplosion
            force={2}
            duration={3000}
            height={300}
            particleSize={7}
            zIndex={99}
            particleCount={80}
            colors={[
              "#FF6B6B", // Neon red
    "#FFD93D", // Neon yellow
    "#5CD85C", // Lime green
    "#5B9DF9", // Sky blue
    "#9B5CF9", // Neon purple
    "#FF77FF", // Hot pink
    "#FF66CC", // Vibrant pink
    "#33CCFF", // Electric blue
    "#66FF66", // Bright green
    "#FFAA33", // Neon orange
    "#D936FF", // Vivid violet
    "#00FFD1", // Aqua cyan
    "#FFA3E0", // Soft pink
    "#FFB84D", // Warm amber
            ]}
          />
        )}
        {icon === "copy" ? <Cicon /> : <Dicon />}
      </button>
    </>
  );
}

export default CopyBt;
