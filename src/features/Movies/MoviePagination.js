import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.css';
import Scss from './MoviesCss.scss';
import AppConfig from '../../config/index';


class MoviePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.props.paginate(pageNumber);
  }
  render() {
    // console.log('MoviePagination的props', this.props);
    // console.log('AppConfig', AppConfig);
    return (
      <div>
        <Pagination
          hideNavigation
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={AppConfig.itemsCountPerPage}
          totalItemsCount={this.props.totalItems}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          prevPageText="<"
          nextPageText=">"
        />
      </div>
    );
  }
}

export default  MoviePagination;
