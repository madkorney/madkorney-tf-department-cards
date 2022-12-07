import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTreeData } from 'react-stately';

import { TabHeader, DepartmentDetailsCard } from './components';

import { Department, initialItems } from 'data';

import './App.scss';

const App = () => {
  const departmentTree = useTreeData<Department>({
    initialItems: initialItems,
    initialSelectedKeys: [],
    getKey: (item) => item.id,
    getChildren: (item) => item.subDepartments,
  });
  const [selectedDepartment, setSelectedDepartment] = useState(departmentTree.getItem('0'));

  const handleSelectSubDepartment = (id: string) => {
    const updatedDeptSelection = departmentTree.getItem(id);
    if (updatedDeptSelection) setSelectedDepartment(updatedDeptSelection);
  };

  const handleSelectParentDepartment = (id: string) => {
    const updatedDeptSelection = departmentTree.getItem(id);
    if (updatedDeptSelection) setSelectedDepartment(updatedDeptSelection);
  };

  const handleAddDepartment = () => {
    const newDept: Department = {
      id: uuidv4(),
      departmentHead: { name: 'новый начальник' },
      departmentName: 'новый отдел',
      parentDepartmentID: selectedDepartment.key as string,
      employeesNumber: 1,
      subDepartments: [],
    };
    departmentTree.append(selectedDepartment.key, newDept);
    const updSubDepts = selectedDepartment.value.subDepartments.slice();
    updSubDepts.push(newDept);

    departmentTree.update(selectedDepartment.key, {
      ...selectedDepartment.value,
      subDepartments: updSubDepts,
    });

    setSelectedDepartment(() => departmentTree.getItem(selectedDepartment.key));
  };

  // const handleUpdateDepartment = (id: string) => {
  //   return id;
  // };

  return (
    <div className="App-container">
      <TabHeader />
      <DepartmentDetailsCard
        departmentNode={selectedDepartment.value}
        parentId={selectedDepartment.parentKey as string}
        handleSelectDeparment={handleSelectSubDepartment}
        handleSelectParentDepartment={handleSelectParentDepartment}
        handleAddDepartment={handleAddDepartment}
      />
    </div>
  );
};

export default App;
