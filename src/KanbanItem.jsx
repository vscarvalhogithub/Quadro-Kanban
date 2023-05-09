// src/KanbanItem.js
import React from "react";
import { useDrag } from "react-dnd";

const KanbanItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "kanban-item",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "#f0f0f0",
        borderRadius: "3px",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {item.content}
    </div>
  );
};

export default KanbanItem;