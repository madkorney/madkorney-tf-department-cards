import { Department } from './types';

export const departmentMock1: Department = {
  id: '0',
  departmentName: 'root',
  departmentHead: { name: '' },
  subDepartments: [],
  employeesNumber: 0,
};

export const departmentMock2: Department = {
  id: '1',
  departmentName: 'Отдел продаж',
  departmentHead: { name: 'Макаренко Олег Сергеевич' },
  subDepartments: [],
  parentDepartmentID: '0',
  employeesNumber: 56,
};

export const departmentMock3: Department = {
  id: '2',
  departmentName: 'IT отдел',
  departmentHead: { name: 'Макаренко Олег Сергеевич' },
  subDepartments: [],
  parentDepartmentID: '0',
  employeesNumber: 72,
};

export const departmentMock4: Department = {
  id: '3',
  departmentName: 'Отдел маркетинга',
  departmentHead: { name: 'Макаренко Олег Сергеевич' },
  subDepartments: [],
  parentDepartmentID: '0',
  employeesNumber: 57,
};

export const departmentMock5: Department = {
  id: '4',
  departmentName: 'Отдел хлопушек',
  departmentHead: { name: 'Макаренко Сергей Олегович' },
  subDepartments: [],
  parentDepartmentID: '3',
  employeesNumber: 13,
};

export const departmentMock6: Department = {
  id: '5',
  departmentName: 'Отдел салютов',
  departmentHead: { name: 'Хреново Гадя Петрович' },
  subDepartments: [],
  parentDepartmentID: '3',
  employeesNumber: 44,
};
