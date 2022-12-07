import { EditDropDown } from './EditDropDown';

import { Department } from 'data';

import './departmentCard.scss';

type DepartmentCardProps = {
  department: Department;
  handleSelectDeparment: (id: string) => void;
};

export const DepartmentCard = ({ department, handleSelectDeparment }: DepartmentCardProps) => {
  const { departmentHead, departmentName, employeesNumber } = department;

  return (
    <div
      className="department-card"
      onClick={(e) => {
        handleSelectDeparment(department.id);
        e.stopPropagation();
      }}
    >
      <EditDropDown departmentName={departmentName} />

      <div className="department-name">{departmentName}</div>

      <div className="wrapper">
        <div className="department-subheader">Руководитель</div>
        <div className="department-head">{departmentHead.name}</div>
      </div>

      <div className="wrapper">
        <div className="department-subheader">Количество работников</div>
        <div className="department-employees">{employeesNumber}</div>
      </div>
    </div>
  );
};
