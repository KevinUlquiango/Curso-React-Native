import { IGredes } from "../Interfaces/IGrades";

let grades: Array<IGredes> = [
  {
    subject: "Matematicas",
    grade: 9.5
  },
  {
    subject: "Fisica",
    grade: 5.5
  }
];

export const saveGrades = (grade: IGredes | any) => {
  grades.push(grade);
};
