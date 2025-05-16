// News.js
import React, { useState, useEffect } from "react";
import "./News.css";
import data from "./data";

function News() {
  // 🔽 Yangiliklarni ID bo‘yicha kamayish tartibida saralaymiz (oxirgi yangilik birinchi chiqadi)
  const sortedData = [...data].sort((a, b) => b.id - a.id);

  const itemsPerPage = 4;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const [imageIndices, setImageIndices] = useState(sortedData.map(() => 0));
  const [hovered, setHovered] = useState(sortedData.map(() => false));
  const [expanded, setExpanded] = useState(sortedData.map(() => false));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((index, i) =>
          hovered[i] ? index : (index + 1) % sortedData[i].images.length
        )
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [hovered, sortedData]);

  const handleMouseEnter = (index) => {
    setHovered((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, sortedData.length));
  };

  const toggleExpanded = (index) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="news">
      <h1>
        Texnoparkdagi <span>so‘nggi yangiliklar</span>
      </h1>
      <div className="news_container">
        {sortedData.slice(0, visibleCount).map((item, i) => (
          <div
            key={item.id}
            className="news_c_items"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className="image_wrapper">
              <img
                src={item.images[imageIndices[i]]}
                alt={item.infoName}
                className="fade-image"
              />
              <div className="progress_bar"></div>
            </div>
            <div>
              <b>{item.infoName}</b>
              <p>
                {expanded[i]
                  ? item.info
                  : item.info.length > 200
                  ? item.info.slice(0, 200) + "..."
                  : item.info}
                {item.info.length > 200 && (
                  <button
                    className="more-button"
                    onClick={() => toggleExpanded(i)}
                  >
                    {expanded[i] ? "Less" : "More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < sortedData.length && (
        <button className="yana" onClick={handleLoadMore}>
          Yana
        </button>
      )}
    </div>
  );
}

export default News;
