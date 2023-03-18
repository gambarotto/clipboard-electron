/* eslint-disable no-nested-ternary */
import React from "react";
import chroma from "chroma-js";

import Select, { StylesConfig } from "react-select";
import { AnnotationCategory } from "../../pages/Home";

interface ColourOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}
const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "#373737",
    fontSize: "12px",
    border: 0,
    outline: isFocused ? "solid" : "none",
    outlineColor: isFocused ? "#242424" : "#000000",
    outlineOffset: 0,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#333"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  menuList: (styles) => ({
    ...styles,
    backgroundColor: "#333",
    maxHeight: 200,
  }),
  // container dos itens selecionados que são mostrados no campo do input
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  // palavra dos itens selecionados que são mostrados no campo do input
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  // container remoção de item selecionado
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
interface Props {
  setCategoryAnnotation: React.Dispatch<
    React.SetStateAction<AnnotationCategory[]>
  >;
}
const SelectElement: React.FC<Props> = ({ setCategoryAnnotation }) => {
  const onChange = (option: ColourOption[]): void => {
    setCategoryAnnotation(option);
  };
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[]}
      isMulti
      options={colourOptions}
      styles={colourStyles}
      placeholder="Selecione a categoria"
      onChange={onChange}
    />
  );
};
export default SelectElement;
