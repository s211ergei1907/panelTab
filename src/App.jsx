import { useState } from "react";
import { Course } from "./components/Course";
import { ForTeacher } from "./components/ForTeacher";
import { Lessons } from "./components/Lessons";
import { Tasks } from "./components/Tasks";



function App(State) {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <div className="wrapper">
      <div className="tab">
        <li onClick={() => activePanel(0)}>О курсе</li>
        <li onClick={() => activePanel(1)}>Задачи</li>
        <li onClick={() => activePanel(2)}>Занятия</li>
        <li onClick={() => activePanel(3)}>Преподавателю</li>
      </div>
      <Course setActivePanel={activePanel}/>
      <ForTeacher setActivePanel={activePanel}/>
      <Lessons setActivePanel={activePanel}/>
      <Tasks setActivePanel={activePanel}/>

    </div>
  );
}

export default App;
