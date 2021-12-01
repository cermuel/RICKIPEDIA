import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss";

const Pagination = ({info, setPageNumber, pageNumber}) => {
    return <ReactPaginate 
    className="pagination justify-content-center gap-4 my-2"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    nextLabel="Next"
    previousLabel="Previous"
    previousClassName={styles.btn}
    nextClassName={styles.btn}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    onPageChange={(data) => {
        setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages}/>;
}

export default Pagination;
