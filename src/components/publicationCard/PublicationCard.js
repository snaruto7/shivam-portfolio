import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({publicationDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            publicationDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="publication-card-title">{publicationDetails.title}</div>
          <p className="publication-card-subtitle">{publicationDetails.book}</p>

          <div className="card-footer-button-div">
            <a href={publicationDetails.book_url} target="_" className="publication-button">
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
