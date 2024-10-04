import React from "react";

const SideAnimation = () => {
  return (
    <div className="floppy-container-holder lg:w-1/2 xl:w-1/4">
      <div
        style={`position:relative;width:100%;height:100%;overflow:hidden;pointer-events:auto`}
      >
        <div style={`width:100%;height:100%`}>
          <canvas
            style={`display: block; width: 382.4px; height: 674.4px;`}
            data-engine="three.js r153"
            width="477"
            height="843"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default SideAnimation;
