import React, {FC} from 'react';
import style from "./Paginator.module.sass"

type PaginatorType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (num: number) => void
}

const Paginator: FC<PaginatorType> = ({totalCount, pageSize, currentPage, changeCurrentPage}) => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const pagesCount = 10;
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i > pagesCount) {
            break;
        }
        pages.push(i);
    }

    const pagesItems = pages.map(num => <li className={num === currentPage ? style.active : undefined} key={num}
                                            onClick={() => {changeCurrentPage(num)}}>{num}</li>);

    return (
        <ul className={style.pagination}>
            {pagesItems}
        </ul>
    );
};

export default Paginator;