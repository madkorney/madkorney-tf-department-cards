import { ButtonHeader } from './ButtonHeader';

import './tabHeader.scss';

export const TabHeader = () => {
  return (
    <div className="tab-header">
      <ButtonHeader caption={'Сотрудники'} />
      <ButtonHeader active caption={'Подразделения'} />
      <ButtonHeader caption={'Дочерние организации'} />
    </div>
  );
};
