import React from "react";
import { Titulo } from "../Titulo";
import { AvaliacaoCard, AvaliacaoObj } from "./AvaliacaoCard";

export const Avaliacoes = () => {
  let cards: {
    id: number;
    title: string;
    description: string;
    img?: string;
    isCompleted?: boolean;
  }[] = [
    {
      id: 1,
      title: "React",
      description: "Aprenda React do zero!",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Next",
      description: "Aprenda Next do zero!",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      isCompleted: true,
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <li key={card.id}>
          <AvaliacaoCard data={card} />
        </li>
      ))}
    </ul>
  );
};
