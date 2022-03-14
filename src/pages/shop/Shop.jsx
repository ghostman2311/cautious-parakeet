import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collection.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
