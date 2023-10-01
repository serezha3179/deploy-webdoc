// import { useEffect, useRef, useState } from "react";
// import styles from "./select.module.scss";
import "./select.scss";
import Select from 'react-select'

const options = [
  { value: 'Оператор', label: 'Оператор'},
  { value: 'Координатор', label: 'Координатор'},
  { value: 'Администратор', label: 'Администратор'},
  { value: 'Главный администратор', label: 'Главный администратор'}
]

function Selectt({setvalue}) {

function handleChange(selectedOption) {
  // console.log(selectedOption.value);
  setvalue(selectedOption.value)
}
  return (
    <Select 
    options={options} 
    placeholder="Выбрать" 
    onChange={handleChange}
    className="react-select-container"
    classNamePrefix="react-select"
    noOptionsMessage={() => "Нет совпадений"}
    />
  );
}
export  default Selectt