import React from 'react';
import {getPageArray} from "../../../utils/Pages";

const MyPagination = ({totalPage, page, changePage}) => {
    let pagesArray = getPageArray(totalPage)
    return (
        <div className="pagination__wrap">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'pagination_elem pagination_elem__current' : 'pagination_elem'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default MyPagination;