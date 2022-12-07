export type DepartmentHead = {
  name: string;
};

export type DepartmentData = {
  departmentName: string;
  departmentHead: DepartmentHead;
  employeesNumber: number;
};

export type Department = {
  id: string;
  departmentName: string;
  departmentHead: DepartmentHead;
  subDepartments: Department[];
  parentDepartmentID?: string;
  employeesNumber: number;
};
