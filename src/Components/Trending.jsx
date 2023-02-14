import React from "react";
import "../Component-css/Trending.css";
const Trending = () => {
  const items = [
    {
      img: "../resources/AOT.jpg",
      id: 1,
      type: "series",
      type2: "Horror",
      name: "Attack On T...",
    },
    {
      img: "../resources/Bleach.jpg",
      id: 1,
      type: "series",
      type2: "Action Shonen",
      name: "Bleach TYBW",
    },
    {
      img: "../resources/OP.jpg",
      id: 1,
      type: "series",
      type2: "Adventures",
      name: "One Piece",
    },
    {
      img: "../resources/Vinland-Saga.jpg",
      id: 1,
      type: "series",
      type2: "Adventures",
      name: "Vinland-Saga",
    },
    {
      img: "../resources/BC.jpg",
      id: 1,
      type: "series",
      type2: "Adventures",
      name: "Black Clover",
    },
    {
      img: "../resources/Naruto-shippuden.jpg",
      id: 1,
      type: "series",
      type2: "Adventures",
      name: "Naruto Shi...",
    },
  ];

  return (
    <div className=" mt-5">
      <h3 className=" ms-5 mb-4 text-decoration-underline">Trending</h3>
      <div className=" row row-T ms-5">
        {items.map((item) => {
          return (
            <div className="col-2 mb-4 ">
              <div className="card  card-R">
                <img src={item.img} alt="" className="card-img img-for-R" />
                <div className="card-body d-flex justify-content-between">
                  <div className="">
                    <h4 className="text-white mb-0">{item.name}</h4>
                    <p className="text-white mb-0 mt-2">Type : {item.type}</p>
                    <p className="text-white mb-0">Type Of : {item.type2}</p>
                  </div>
                  <div className="">
                    <i className=" bi bi-bookmark-fill foricon"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
