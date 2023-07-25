/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Titulo } from "../Titulo";
import { Botao } from "../Botao";

export interface AvaliacaoObj {
  id: number;
  title: string;
  description: string;
  img?: string;
  isCompleted?: boolean;
}

interface AvaliacaoCardProp {
  data: AvaliacaoObj;
}

export const AvaliacaoCard = ({ data }: AvaliacaoCardProp) => {
  const { title, description } = data;
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-32 object-cover"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="React"
      />
      <div className="p-4">
        <Titulo as="h4">{title}</Titulo>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="action">
          {!data.isCompleted ? (
            <Botao>Iniciar</Botao>
          ) : (
            <div
              className=" 
            mt-4
            px-4
            py-2
            bg-green-500
            text-white
            rounded
             "
            >
              Completo!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
