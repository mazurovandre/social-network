import React, {FC, useEffect, useState} from 'react';
import style from "./Paginator.module.sass"

type PaginatorType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (num: number) => void
}

const Paginator: FC<PaginatorType> = ({totalCount, pageSize, currentPage, changeCurrentPage}) => {
    const portionSize = 10;
    const totalPages = Math.ceil(totalCount / pageSize);
    const maxPortionNum = Math.ceil(totalCount / (pageSize * portionSize));
    const [portionNum, setPortionNum] = useState(1);
    const [pages, setPages] = useState(createPagesArray(1));
    useEffect(() => {
        setPages(createPagesArray(portionNum))
    }, [portionNum])

    function createPagesArray(num: number) {
        const arr = [];
        let count = 1;
        for (let i = 1 + ((num - 1) * portionSize); i <= totalPages; i++) {
            if (count > portionSize) break;
            arr.push(i);
            count++;
        }
        return arr
    }

    const showPrevPortion = () => {
        setPortionNum(prevState => prevState - 1)
    }

    const showNextPortion = () => {
        setPortionNum(prevState => prevState + 1)
    }

    const pagesItems = pages.map(num => <li className={num === currentPage ? style.active : undefined} key={num}
                                            onClick={() => {changeCurrentPage(num)}}>{num}</li>);

    return (
        <div className={style.pagination}>
        <button disabled={portionNum <= 1} onClick={showPrevPortion}>prev</button>
        <ul className={style.list}>
            {pagesItems}
        </ul>
        <button disabled={portionNum >= maxPortionNum} onClick={showNextPortion}>next</button>
        </div>
    );
};

export default Paginator;