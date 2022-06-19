import { Button, Input, Icon } from "@rneui/base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { CInput } from "../components/CInput";
import { IGredes } from "../Interfaces/IGrades";

import { IGredeForm } from "../Interfaces/IGredeForm";
import { saveGrades, updateGrades } from "../services/GradeServices";
import { Wrapper } from "./style";
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
const GradeForm = ({ navigation, route }: any) => {
  let dataQualification = route.params?.qualification;

  let isNew = dataQualification !== undefined ? false : true;

  let updateGrade = isNew ? "" : dataQualification.grade;
  let updateSubject = isNew ? "" : dataQualification.subject;

  const initialState: IGredes = {
    subject: updateSubject,
    grade: updateGrade.toString(),
    errorMessageGrade: "",
    errorMessageSubject: ""
  };
  const [alumn, setAlumn] = useState<any | IGredes>(initialState);

  const save = () => {
    if (validate()) {
      const refresh = route.params?.refresh;

      const { subject, grade } = alumn;
      if (isNew) {
        saveGrades({ subject, grade });
      } else {
        if (refresh !== undefined) {
          refresh();
        }
        updateGrades({ subject, grade });
      }

      navigation.goBack();
    }
  };
  const validate = (): boolean => {
    let isValido: boolean = false;
    let { subject, grade } = alumn;
    grade = parseFloat(grade);
    validateAlumn("", "");
    if (subject === "" && grade === "") {
      validateAlumn(
        "Debe Agregar una Materia",
        "Debe Agregar una nota entre 0 y 10"
      );
      return isValido;
    } else if (subject === "") {
      validateAlumn("Debe Agregar una Materia", "");
      return isValido;
    } else if (
      grade === "" ||
      isNaN(grade) ||
      grade < 0 ||
      grade > 10
    ) {
      validateAlumn("", "Debe Agregar una nota entre 0 y 10");
      return isValido;
    } else {
      return (isValido = true);
    }
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
            isNew={isNew}
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
        title={isNew ? "Guadar" : "Actualizar"}
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
