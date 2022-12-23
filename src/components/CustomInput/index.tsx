import React from 'react'
import InputErrorMessage from '../InputErrorMessage'
import styles from './styles.module.css'

type Props = {
  name: string
  label: string
  doc?: boolean | undefined
}

const CustomInput: React.FC<Props> = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <div className={styles.container}>
      <label htmlFor={props.name}>{ props.label }</label>
      <input
      autoComplete='none'
        type={!!props.doc ? 'number' : 'text'}
        name={props.name}
        id={props.name}
        value={value}
        autoCapitalize='words'
        onChange={(text: any) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps} />
        {hasError && <InputErrorMessage message={errors[name]} />}
    </div>
  )
}

export default CustomInput