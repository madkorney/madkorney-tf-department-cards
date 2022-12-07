import './departmentDetailsHeader.scss';

type DepartmentDetailsHeaderProps = {
  departmentHeadName: string;
  departmentName: string;
};

export const DepartmentDetailsHeader = ({
  departmentHeadName,
  departmentName,
}: DepartmentDetailsHeaderProps) => {
  return (
    <div className="department-details-header-container">
      <div className="department-name">{departmentName}</div>
      <div className="department-subheader">Руководитель</div>
      <div className="department-head">{departmentHeadName}</div>
    </div>
  );
};
