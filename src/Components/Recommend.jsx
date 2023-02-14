import React from "react";
import "../Component-css/Recommend.css";
const Recommend = () => {
  const Ritems = [
    {
      img: "../resources/AOT.jpg",
      id: 1,
      type: "series",
      type2: "Horror",
      name: "Attack On T...",
    },
    {
      img: "../resources/Bleach.jpg",
      id: 2,
      type: "series",
      type2: "Action Shonen",
      name: "Bleach TYBW",
    },
    {
      img: "../resources/Jujutsu-Kaisen.jpg",
      id: 3,
      type: "series",
      type2: "Adventures",
      name: "Jujutsu-Ka...",
    },

    {
      img: "../resources/OP.jpg",
      id: 4,
      type: "series",
      type2: "Adventures",
      name: "One Piece",
    },

    {
      img: "../resources/FAB.jpg",
      id: 5,
      type: "series",
      type2: "Adventures",
      name: "Fullmetal-A...",
    },

    {
      img: "../resources/Gintama.jpg",
      id: 6,
      type: "series",
      type2: "Adventures",
      name: "Gintama",
    },

    {
      img: "../resources/Vinland-Saga.jpg",
      id: 7,
      type: "series",
      type2: "Adventures",
      name: "Vinland-Saga",
    },

    {
      img: "../resources/OPM.jpg",
      id: 8,
      type: "series",
      type2: "Adventures",
      name: "One Punc...",
    },

    {
      img: "../resources/Naruto-Shippuden.jpg",
      id: 9,
      type: "series",
      type2: "Adventures",
      name: "Naruto-Shi...",
    },

    {
      img: "../resources/HXH.jpg",
      id: 10,
      type: "series",
      type2: "Adventures",
      name: "Hunter-X...",
    },

    {
      img: "../resources/BC.jpg",
      id: 11,
      type: "series",
      type2: "Adventures",
      name: "Black-Clover",
    },

    {
      img: "../resources/DN.jpg",
      id: 12,
      type: "series",
      type2: "Adventures",
      name: "Death Note",
    },
  ];
  return (
    <div className=" mt-5">
      <h3 className=" ms-5 mb-4 text-decoration-underline">Recommended</h3>
      <div className=" row row-T ms-5">
        {Ritems.map((item) => {
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

export default Recommend;
