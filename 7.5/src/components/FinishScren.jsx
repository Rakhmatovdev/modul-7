import React from "react";

const FinishScren = ({ points, totalQustionPoint, dispatch }) => {
  const percentagePoints = Math.floor((points * 100) / totalQustionPoint);
  return (
    <>
      <div className="result">
        {percentagePoints >= 80
          ? "😎"
          : percentagePoints >= 60
          ?  "😁"
          : percentagePoints >= 40
          ? "😏"
          : percentagePoints >= 20
          ?"😳"
          : "😩"}
        Siz {totalQustionPoint} baldan {points}-ball topladingiz (
        {percentagePoints}%)
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScren;
