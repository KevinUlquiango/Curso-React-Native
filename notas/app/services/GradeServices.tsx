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

export const getGrades = (): Array<IGredes> => {
  return grades;
};
export const updateGrades = (grade: IGredes) => {
  let position = find(grade.subject);
  grades[position] = grade;
};
const find = (subject: string): any => {
  return grades.findIndex((grade) => {
    if (grade.subject === subject) {
      return grade;
    }
  });
};
