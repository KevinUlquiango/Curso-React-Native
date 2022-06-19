import { Input } from "@rneui/base";
import React, { useState } from "react";
import { IGredes } from "../Interfaces/IGrades";
import { IGredeForm } from "../Interfaces/IGredeForm";

export const CInput = (props: IGredeForm | any) => {
  const {
    placeholder,
    data,
    label,
    funtionality,
    value,
    name,
    errorMessage,
    isNew
  } = props;

  return (
    <Input
      disabled={!isNew && name == "subject"}
      value={value}
      onChangeText={(txt) => {
        funtionality({ ...data, [name]: txt });
      }}
      placeholder={placeholder}
      label={label}
      errorMessage={data[errorMessage]}
      keyboardType={name == "grade" ? "numeric" : "default"}
    />
  );
};
