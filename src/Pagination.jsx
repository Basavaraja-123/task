import React, { useState } from "react";
import Data from "./data.json";
import "./pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // per page records 10
  const lastIndex = currentPage * recordsPerPage; //current page multiple recordsperpage it mean next page
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
  const total = Data.length;

  return (
    <div className="view">
      <div className="showview">
        <span className="show"><b>
          show </b><span className="showbox">{lastIndex} {" "}
          <FontAwesomeIcon value={lastIndex} icon={faSort} />
          </span>
          <span><b>entries</b> </span>
        </span>
        <span className="search">
          <label><b>Search : </b></label>
          <input type="search" />
        </span>
      </div>
      <table className="table">
        <thead>
          <th>
            Name <FontAwesomeIcon value={lastIndex} icon={faSort}  className="Ficon"/>
          </th>
          <th>
            Position <FontAwesomeIcon value={lastIndex} icon={faSort} className="Ficon"/>
          </th>
          <th>
            Office <FontAwesomeIcon value={lastIndex} icon={faSort} className="Ficon"/>
          </th>
          <th>
            Age <FontAwesomeIcon value={lastIndex} icon={faSort} className="Ficon"/>
          </th>
          <th>
            Start Date <FontAwesomeIcon value={lastIndex} icon={faSort} className="Ficon" />
          </th>
          <th>
            Salary <FontAwesomeIcon value={lastIndex} icon={faSort} className="Ficon"/>
          </th>
        </thead>
        <tbody>
          {records.map((d, id) => (
            <tr key={id} className="trow">
              <td>{d.name}</td>
              <td>{d.position}</td>
              <td>{d.office}</td>
              <td>{d.age}</td>
              <td>{d.date}</td>
              <td>{d.salary}</td>
            </tr>
          ))}
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start Date</th>
          <th>Salary</th>
        </tbody>
      </table>
      <div>
        <span className="butomview">
          showing {currentPage} to {lastIndex} of {total} entries
          <span className="pagebuttons">
            <ul className="pagination ">
              <li>
                <button href="#" className="page-link" onclick={previousPage}>
                  previous
                </button>
              </li>

              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <button
                    href="#"
                    className="page-link"
                    onclick={() => changeCurrentPage(n)}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button href="#" className="page-link" onclick={nextPage}>
                  Next
                </button>
              </li>
            </ul>
          </span>
        </span>
      </div>
    </div>
  );
  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }
}
export default Pagination;
