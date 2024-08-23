import { arrowLeftIcon, arrowRightIcon } from "../../assets";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  page: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  maxVisiblePages: number;
}

export default function Pagination({
  page,
  totalResults,
  onPageChange,
  maxVisiblePages,
}: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(page);
  const [selectedValue, setSelectedValue] = useState(currentPage);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalResults <= maxVisiblePages) {
      for (let i = 1; i <= totalResults; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(totalResults, startPage + maxVisiblePages - 1);

      // Ensure startPage and endPage are within bounds
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push(null);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalResults) {
        if (endPage < totalResults - 1) {
          pageNumbers.push(null);
        }
        if (startPage === 1) {
          for (let i = totalResults - 1; i <= totalResults; i++) {
            pageNumbers.push(i);
          }
        } else {
          pageNumbers.push(totalResults);
        }
      }
    }

    return pageNumbers;
  };

  const handlePageClick = (page: number | null) => {
    if (page !== null) {
      setCurrentPage(page);
      setSelectedValue(page);
      onPageChange(page);
    }
  };

  const selectNumArr = () => {
    const arrNum = [];
    for (let i = 1; i <= totalResults; i++) {
      arrNum.push(i);
    }
    return arrNum;
  };

  const onSelectHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    const value = +evt.target.value;
    setSelectedValue(value);
    handlePageClick(value);
  };

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.left}>
        <h1>Showing</h1>
        <span>
          <select
            name="org"
            id="org"
            value={selectedValue}
            onChange={onSelectHandler}
          >
            {selectNumArr().map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </span>
        <h1>out of {totalResults}</h1>
      </div>
      <div className={styles.right}>
        <button
          className={styles.prevBtn}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={arrowLeftIcon} alt="arrow-left" />
        </button>
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={
              pageNumber === currentPage ? styles.active : styles.btnPaginate
            }
            onClick={() => handlePageClick(pageNumber)}
            disabled={pageNumber === null}
          >
            {pageNumber === null ? "..." : pageNumber}
          </button>
        ))}
        <button
          className={styles.nextBtn}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalResults}
        >
          <img src={arrowRightIcon} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
