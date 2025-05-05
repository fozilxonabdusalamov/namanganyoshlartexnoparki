import React from "react";
import "./News.css";
import oneStudy from "./image/one.jpg";
import twoStudy from "./image/yoshlar.jpg";

const data = [
  {
    id: 1,
    image: oneStudy,
    infoName: `“Technovation Girls” tanlovi App Inventor mashg'ulotlari`,
    info: `Andijon yoshlar texnoparkida Technovation girls tanlovi ishtirokchilarining navbatdagi App Inventor mashg'uloti va raqamli loyiha taqdimotlari bo'lib o'tdi.`,
  },
  {
    id: 2,
    image: twoStudy,
    infoName: `“Technovation Boys” tanlovi App Inventor mashg'ulotlari`,
    info: `Andijon yoshlar texnoparkida Technovation boys tanlovi ishtirokchilarining navbatdagi App Inventor mashg'uloti va raqamli loyiha taqdimotlari bo'lib o'tdi.`,
  },
  {
    id: 2,
    image: twoStudy,
    infoName: `“Technovation Boys” tanlovi App Inventor mashg'ulotlari`,
    info: `Andijon yoshlar texnoparkida Technovation boys tanlovi ishtirokchilarining navbatdagi App Inventor mashg'uloti va raqamli loyiha taqdimotlari bo'lib o'tdi.`,
  },
  {
    id: 2,
    image: twoStudy,
    infoName: `“Technovation Boys” tanlovi App Inventor mashg'ulotlari`,
    info: `Andijon yoshlar texnoparkida Technovation boys tanlovi ishtirokchilarining navbatdagi App Inventor mashg'uloti va raqamli loyiha taqdimotlari bo'lib o'tdi.`,
  },
];

function News() {
  return (
    <div className="news">
      <h1>
        Texnoparkdagi <span>so‘nggi yangiliklar</span>
      </h1>
      <div className="news_container">
        {data.map((item, index) => (
          <div key={index} className="news_c_items">
            <img src={item.image} alt={item.infoName} />
            <div>
              <b>{item.infoName}</b>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="yana">Yana</button> */}
    </div>
  );
}

export default News;
