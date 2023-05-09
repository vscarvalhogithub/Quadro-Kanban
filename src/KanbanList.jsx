// src/KanbanList.js
import React from "react";
import KanbanItem from "./KanbanItem";
import { useDrop } from "react-dnd";

const KanbanList = ({ list, moveItem }) => {
  const [, drop] = useDrop({
    accept: "kanban-item",
    drop: (item) => moveItem(item.id, list.id),
  });

  return (
    <div ref={drop} style={{ minWidth: "250px", border: "1px solid black", padding: "20px" }}>
      <h3>{list.title}</h3>
      <div>
        {list.items.map((item) => (
          <KanbanItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default KanbanList;