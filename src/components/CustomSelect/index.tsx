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
}

const CustomSelect: React.FC<Props> = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  return (
    <div className={styles.container}>
      <label htmlFor={props.name}>{ props.label }</label>
      <select onChange={(text: any) => onChange(name)(text)}>
        { props.options.map((o: OptionProps, i: number) => (
          <option key={i} value={o.value}>{o.title}</option>
        )) }
      </select>
    </div>
  )
}

export default CustomSelect