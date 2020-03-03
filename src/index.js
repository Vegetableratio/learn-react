import React from 'react';
import ReactDOM from 'react-dom';


class GoodInfo extends React.Component {
  render() {
    return (
      <div className="info">
        <span className="name">Football</span>&emsp;&emsp;
        <span className="price">$29.99</span>
      </div>
    )
  }
}

class ProductInfo extends React.Component {
  render() {
    return (
      <div className="product-info">
        <div className="product-category-row"></div>
        <GoodInfo />
      </div>
    )
  }
}

class TableContent extends React.Component {
  render() {
    return (
      <div className="table-content">
        <div className="title">
          <span className="name">Name</span>&emsp;&emsp;
          <span className="price">Price</span>
        </div>
        <ProductInfo />
      </div>
    )
  }
}

class SearchInput extends React.Component {
  render() {
    return (
      <div class="search-input">
        <input type="text" placeholder="Search..." /><br />
        <label>
          <input type="checkbox" />Only show products in stock
      </label>
      </div>
    )
  }
}

class Search extends React.Component {
  render() {
    return (
      <div className='search-result'>
        <SearchInput />
        <TableContent />
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);