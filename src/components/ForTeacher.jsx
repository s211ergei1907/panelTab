import React from "react";

export const ForTeacher = (activePanel) => {
  return (
    <div className={'teacherWrapper' + ' ' + activePanel === 1 ? 'active-tabs' : 'tabs'}>
      <h2>Непроверенных работ: 0</h2>
      <div className="buttonWrapper">
        <button className="button">Проверить дз</button>
        <button className="button">Задать ДЗ</button>
        <button className="button">Статистика</button>
      </div>
    </div>
  );
};
