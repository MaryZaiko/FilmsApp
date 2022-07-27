import React, { FC } from "react";
import "./FilmsList.css";
import Card from "../Card";
import { CardTypes } from "../../common/types";

type FilmsListProps = {
  data: CardTypes[];
  isTrends?: boolean;
};

const FilmsList: FC<FilmsListProps> = ({ data, isTrends }) => {
  const cardList = data.map((card) => {
    return (
      <div key={card.id}>
        <Card
          id={card.id}
          poster={card.poster}
          name={card.name}
          rating={card.rating}
          isTrends={isTrends}
        />
      </div>
    );
  });

  return <div className="filmsListWrapper">{cardList}</div>;
};
export default FilmsList;
