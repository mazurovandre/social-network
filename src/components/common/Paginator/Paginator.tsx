import React, {FC} from 'react';
import {Pagination} from "antd";
import style from './Paginator.module.sass'

type PaginatorType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number, pageSize: number) => void
    changePageSize: (pageSize: number) => void
}

const Paginator: FC<PaginatorType> = ({totalCount, pageSize, changeCurrentPage, changePageSize, currentPage}) => {

    const onShowSizeChange = (currentPage: number, pageSize: number) => {
        changePageSize(pageSize);
    }

    const onChange = (currentPage: number, pageSize: number) => {
        changeCurrentPage(currentPage, pageSize);
    }

    return (
        <div className={style.wrapper}>
            <Pagination
                showSizeChanger
                pageSize={pageSize}
                onShowSizeChange={onShowSizeChange}
                current={currentPage}
                onChange={onChange}
                total={totalCount}
            />
        </div>
    );
};

export default Paginator;