import { Button, Input, Icon } from "@rneui/base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { CInput } from "../components/CInput";
import { IGredes } from "../Interfaces/IGrades";

import { IGredeForm } from "../Interfaces/IGredeForm";
import { saveGrades } from "../services/GradeServices";
import { Wrapper } from "./style";

const GradeForm = () => {
  const gradeObject: Array<IGredeForm> = [
    {
      name: "subject",
      label: "Materia",
      placeholder: "Ejemplo: Matematicas",
      messageError: "errorMessageSubject"
    },
    {
      name: "grade",
      label: "Nota",
      placeholder: "0-10",
      messageError: "errorMessageGrade"
    }
  ];
  const initialState: IGredes = {
    subject: "",
    grade: "",
    errorMessageGrade: "",
    errorMessageSubject: ""
  };
  const [alumn, setAlumn] = useState<any | IGredes>(initialState);

  const save = () => {
    validate();
    const { subject, grade } = alumn;
    saveGrades({ subject, grade });
  };
  const validate = () => {
    let { subject, grade } = alumn;
    grade = parseFloat(grade);
    validateAlumn("", "");
    if (subject === "" && grade === "") {
      validateAlumn(
        "Debe Agregar una Materia",
        "Debe Agregar una nota entre 0 y 10"
      );
    } else if (subject === "") {
      validateAlumn("Debe Agregar una Materia", "");
    } else if (
      grade === "" ||
      isNaN(grade) ||
      grade <= 0 ||
      grade >= 10
    ) {
      validateAlumn("", "Debe Agregar una nota entre 0 y 10");
    }
    console.log(typeof grade);
  };
  const validateAlumn = (
    messageSubject: string,
    messageGrade: string
  ) => {
    setAlumn({
      ...alumn,
      ["errorMessageSubject"]: messageSubject,
      ["errorMessageGrade"]: messageGrade
    });
  };

  return (
    <Wrapper>
      <Text>Formulario De Notas</Text>
      {gradeObject.map((data: IGredeForm | any) => {
        return (
          <CInput
            data={alumn}
            key={data.name}
            name={data.name}
            placeholder={data.placeholder}
            label={data.label}
            funtionality={setAlumn}
            value={alumn[data.name]}
            errorMessage={data.messageError}
          />
        );
      })}

      <Button
        title='Guadar'
        icon={{
          name: "save",
          type: "Entypo",
          size: 18,
          color: "white"
        }}
        onPress={save}
        buttonStyle={{ backgroundColor: "green" }}
      />
    </Wrapper>
  );
};
export default GradeForm;
