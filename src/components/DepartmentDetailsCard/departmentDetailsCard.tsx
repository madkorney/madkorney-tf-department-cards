import { DepartmentCard } from '../DepartmentCard';
import { AddNewDepartmentButton } from './AddNewDepartmentButton';
import { DepartmentDetailsHeader } from './DepartmentDetailsHeader';

import { Department } from 'data';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';

import './departmentDetailsCard.scss';

type DepartmentDetailsCardProps = {
  departmentNode: Department;
  parentId: string;
  handleSelectDeparment: (id: string) => void;
  handleSelectParentDepartment: (id: string) => void;
  handleAddDepartment: () => void;
};

export const DepartmentDetailsCard = ({
  departmentNode,
  parentId,
  handleSelectDeparment,
  handleSelectParentDepartment,
  handleAddDepartment,
}: DepartmentDetailsCardProps) => {
  const { parentDepartmentID, subDepartments, departmentHead, departmentName } = departmentNode;

  return (
    <>
      {parentDepartmentID && (
        <div className="dept-header">
          <DepartmentDetailsHeader
            departmentHeadName={departmentHead.name}
            departmentName={departmentName}
          />
          <button
            className="btn-back"
            onClick={() => {
              handleSelectParentDepartment(parentId);
            }}
          >
            <BackIcon className="back-btn" />
          </button>
        </div>
      )}
      <div className="departments-list">
        {subDepartments.length > 0 &&
          subDepartments.map((subDepartment) => {
            return (
              <DepartmentCard
                key={subDepartment.id}
                department={subDepartment}
                handleSelectDeparment={() => handleSelectDeparment(subDepartment.id)}
              />
            );
          })}

        <AddNewDepartmentButton handleAddDepartment={handleAddDepartment} />
      </div>
    </>
  );
};
