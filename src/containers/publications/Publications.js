import React, {useContext} from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="publication-header">
          <h1 className="publication-header-title">{publicationsSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode publication-header-subtitle"
                : "subTitle publication-header-subtitle"
            }
          >
            {publicationsSection.subtitle}
          </p>
          {publicationsSection.publications.map((publication, i) => {
            return (
              <PublicationCard
                key={i}
                publicationDetails={{
                  title: publication.title,
                  book: publication.book,
                  book_url: publication.book_url,
                  //image: talk.image,
                  isDark
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
