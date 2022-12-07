import { useState } from 'react';

import { ModalDeleteConfirmation } from './ModalDeleteConfirmation';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';
import { ReactComponent as MoveIcon } from '../../../assets/icons/move.svg';

import './editDropDown.scss';
import '../../Modal/modal.scss';

type EditDropDownProps = {
  departmentName: string;
};

export const EditDropDown = ({ departmentName }: EditDropDownProps) => {
  const dropDownHidden = 'drop-down-list hidden';
  const dropDownVisible = 'drop-down-list';
  const [listIsVisible, setListIsVisible] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div className="edit-drop">
      <button
        className="btn-icon"
        onClick={(e) => {
          e.stopPropagation();
          setListIsVisible(!listIsVisible);
        }}
      >
        <EditIcon className="svg-icon" />
      </button>

      <div className={listIsVisible ? dropDownVisible : dropDownHidden}>
        <ul>
          <li
            onClick={(e) => {
              e.stopPropagation();
              setListIsVisible(!listIsVisible);
            }}
          >
            <EditIcon className="list-icon" /> Изменить
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              setListIsVisible(!listIsVisible);
            }}
          >
            <MoveIcon className="list-icon" /> Переместить
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              setOpenDeleteModal(true);
            }}
          >
            <DeleteIcon className="list-icon" /> Удалить
          </li>
        </ul>
      </div>

      {openDeleteModal && (
        <ModalDeleteConfirmation
          departmentName={departmentName}
          confirmHandler={(e: React.MouseEvent) => {
            e.stopPropagation();
            setOpenDeleteModal(false);
          }}
          cancelHandler={(e: React.MouseEvent) => {
            e.stopPropagation();
            setOpenDeleteModal(false);
          }}
        />
      )}
    </div>
  );
};
