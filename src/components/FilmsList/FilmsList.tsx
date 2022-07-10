import React, { FC } from "react";
import "./FilmsList.css";
import Card from "../Card";
import { CardTypes } from "../../common/types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveTabLink } from "../../redux/reducers/filmsReducer";

type FilmsListProps = {
  data: CardTypes[];
  isTrends?: boolean;
};

const FilmsList: FC<FilmsListProps> = ({ data, isTrends }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickCard = (id: string) => {
    navigate(`/films/${id}`);
    dispatch(setActiveTabLink(""));
  };

  const cardList = data.map((card) => {
    return (
      <div key={card.id} onClick={() => onClickCard(card.id.toString())}>
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
