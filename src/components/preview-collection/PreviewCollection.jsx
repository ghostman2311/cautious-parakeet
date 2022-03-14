import React from "react";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, idx) => idx < 4)
          .map((item) => (
            <div>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
