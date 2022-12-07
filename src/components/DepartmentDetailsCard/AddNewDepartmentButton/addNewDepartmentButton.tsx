import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import './addNewDepartmentButton.scss';

type AddNewDepartmentButtonProps = {
  handleAddDepartment: () => void;
};

export const AddNewDepartmentButton = ({ handleAddDepartment }: AddNewDepartmentButtonProps) => {
  return (
    <div className="btn-add-new-department-container">
      <button className="btn-add-new-department" onClick={() => handleAddDepartment()}>
        <PlusIcon className="btn-add-icon" />
      </button>
    </div>
  );
};
