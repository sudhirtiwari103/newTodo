import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

const List = (props) => {
  const { product } = props;
  if (product != null) {
    return product.map((products, key) => {
      return (
        <div id="listss">
          <div className="function function1">
            <li>
              <div>
                <Link to={"/SubList"} className="link-list link1">
                  <div className="ic">{++key + ') ' + products.title}</div>
                  <div id="icons">
                    {/* <div className="ic"><i class="fa-solid fa-share-nodes"></i></div> */}
                    <div className="ic"><i class="fa-solid fa-user-group"></i></div>
                    <div className="ic"><i class="fa-solid fa-pen-to-square"></i></div>
                    <div className="ic"><i class="fa-solid fa-trash-can"></i></div>
                  </div>
                </Link>
              </div>
            </li>
          </div>
        </div>
      );
    });
  }
};

export default List;
