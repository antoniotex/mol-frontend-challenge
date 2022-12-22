import React from 'react'
import { DocumentEnum } from '../../pages'
import styles from './styles.module.css'

export type OptionProps = {
  title: string
  value: DocumentEnum
}

type Props = {
  name: string
  label: string
  options: OptionProps[]
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

const CustomSelect: React.FC<Props> = ({ name, label, options, handleChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{ label }</label>
      <select onChange={handleChange}>
        { options.map((o, i) => (
          <option key={i} value={o.value}>{o.title}</option>
        )) }
      </select>
    </div>
  )
}

export default CustomSelect