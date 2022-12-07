import { v4 as uuidv4 } from 'uuid';
import { Department } from './types';

export const initialItems: Department[] = [
  {
    id: '0',
    departmentName: 'root',
    departmentHead: { name: '' },
    employeesNumber: 0,
    subDepartments: [
      {
        id: uuidv4(),
        departmentName: 'Отдел продаж',
        departmentHead: { name: 'Макаренко Олег Сергеевич' },
        parentDepartmentID: '0',
        employeesNumber: 56,
        subDepartments: [],
      },
      {
        id: uuidv4(),
        departmentName: 'IT отдел',
        departmentHead: { name: 'Сергеев Макар Олегович' },
        parentDepartmentID: '0',
        employeesNumber: 72,
        subDepartments: [],
      },
      {
        id: uuidv4(),
        departmentName: 'Отдел маркетинга',
        departmentHead: { name: 'Макаренко Олег Сергеевич' },
        parentDepartmentID: '0',
        employeesNumber: 57,
        subDepartments: [
          {
            id: uuidv4(),
            departmentName: 'Отдел хлопушек',
            departmentHead: { name: 'Макаренко Сергей Олегович' },
            parentDepartmentID: '0',
            employeesNumber: 13,
            subDepartments: [],
          },
          {
            id: uuidv4(),
            departmentName: 'Отдел салютов',
            departmentHead: { name: 'Хреново Гадя Петрович' },
            parentDepartmentID: '0',
            employeesNumber: 44,
            subDepartments: [],
          },
        ],
      },
    ],
  },
];
