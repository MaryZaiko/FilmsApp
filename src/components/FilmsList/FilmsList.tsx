import React, { FC } from "react";
import "./FilmsList.css";
import Card from "../Card";
import { CardTypes } from "../../common/types";

type FilmsListProps = {
  data: CardTypes[];
};

const FilmsList: FC<FilmsListProps> = ({ data}) => {
  // const onClickCard = (id: string) => {
  //   window.location.href = `/cards-list/${id}`;
  // };

  const cardList = data.map((card) => {
    return (
      <div key={card.imdbID}
      //  onClick={() => onClickCard(card.imdbID)}
       >
      <Card imdbID={card.imdbID} Poster={card.Poster} Title={card.Title} Genre={card.Genre} Ratings={card.Ratings} />
       </div>
    );
  });

  return <div className="filmsListContainer">{cardList}</div>;
};
export default FilmsList;
