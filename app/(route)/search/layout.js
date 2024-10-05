import React from "react";

function layout({ children }) {
  return (
    <div className="grid grid-cols-4">
      <div>{/* Category */}

      </div>
      <div>
        {children}
        </div>
    </div>
  );
}

export default layout;
