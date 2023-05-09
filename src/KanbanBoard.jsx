// src/KanbanBoard.js
import React, { useState } from "react";
import KanbanList from "./KanbanList";

const KanbanBoard = ({ lists: initialLists }) => {
  const [lists, setLists] = useState(initialLists);

  const moveItem = (itemId, newListId) => {
    // Encontre o item e sua lista atual
    let currentItem, currentListId;
    for (const list of lists) {
      const foundItem = list.items.find((item) => item.id === itemId);
      if (foundItem) {
        currentItem = foundItem;
        currentListId = list.id;
        break;
      }
    }

    // Mova o item para a nova lista
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === currentListId) {
          return { ...list, items: list.items.filter((item) => item.id !== itemId) };
        } else if (list.id === newListId) {
          return { ...list, items: [...list.items, currentItem] };
        } else {
          return list;
        }
      })
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {lists.map((list) => (
        <KanbanList key={list.id} list={list} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default KanbanBoard