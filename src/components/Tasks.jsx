import React from "react";

export const Tasks = (activePanel) => {
  return (
    <div className={'wrapperTasks' + ' ' + activePanel === 3 ? 'active-tabs' : 'tabs'}>
      <div className="CardTasks">
        <div className="CardTasksHead">
          <h3>Так и живем</h3>
          <img
            width={15}
            height={15}
            src="/images/pen.svg"
            alt="under"
          />
        </div>
        <p>Привет мир</p>
      </div>
    </div>
  );
};
