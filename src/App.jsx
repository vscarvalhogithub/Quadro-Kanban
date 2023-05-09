import React from "react";
import KanbanBoard from "./KanbanBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialLists = [
  {
    id: "list-1",
    title: "Para fazer",
    items: [
      { id: "item-1", content: "Aprender React" },
      { id: "item-2", content: "Estudar" },
    ],
  },
  {
    id: "list-2",
    title: "Fazendo",
    items: [{ id: "item-3", content: "Criar um quadro Kanban" }],
  },
  {
    id: "list-3",
    title: "Feito",
    items: [{ id: "item-4", content: "Criar uma conta no Replit" }],
  },
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quadro Kanban</h1>
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard lists={initialLists} />
      </DndProvider>
    </div>
  );
}

export default App;