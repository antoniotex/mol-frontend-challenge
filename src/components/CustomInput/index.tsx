import React from 'react'
import styles from './styles.module.css'

type Props = {
  name: string
  label: string
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}
const CustomInput: React.FC<Props> = ({ name, label, handleChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{ label }</label>
      <input type="text" name={name} id={name} onChange={handleChange} />
    </div>
  )
}

export default CustomInput