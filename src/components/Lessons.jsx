import React from "react";

export const Lessons = (activePanel) => {
  return (
    <div className={'teacherWrapper' + ' ' + activePanel === 2 ? 'active-tabs' : 'tabs'}>
       <div className="CardLesson">
        <div className="datalesson">
            <h3>10.03.2022</h3>
        </div>
        <h2>Front-end</h2>
      </div>
    </div>
  );
};
