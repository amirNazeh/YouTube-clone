import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    ?.startOf("day")
    ?.seconds(time)
    ?.format("H:mm:ss");

  // const test = moment("2013-01-01T00:00:00-13:00").format(
  //   "DD MM YYYY hh:mm:ss"
  // );

  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </span>
  );
};

export default VideoLength;
