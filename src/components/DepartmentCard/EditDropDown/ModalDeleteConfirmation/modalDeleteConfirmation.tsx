import { Button } from 'components/Button';

import './modalDeleteConfirmation.scss';

type ModalDeleteConfirmationProps = {
  confirmHandler: (e: React.MouseEvent) => void;
  cancelHandler: (e: React.MouseEvent) => void;
  departmentName: string;
};

export const ModalDeleteConfirmation = ({
  cancelHandler,
  confirmHandler,
  departmentName,
}: ModalDeleteConfirmationProps) => {
  const confirmationMessage = `Вы уверены, что хотите удалить подразделение ${departmentName} ?`;

  return (
    <div className="modal-wrapper">
      <div className="modal-frame">
        <div className="confirmation-message">{confirmationMessage}</div>

        <div className="buttons-container">
          <Button type="confirm" caption="Да" handleClick={confirmHandler} />
          <Button type="cancel" caption="Оменить" handleClick={cancelHandler} />
        </div>
      </div>
    </div>
  );
};
