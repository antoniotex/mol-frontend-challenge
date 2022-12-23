import React, { useState } from 'react'
import InputErrorMessage from '../InputErrorMessage'
import styles from './styles.module.css'

type Props = {
  name: string
  label: string
  items: string[]
  addItem: any
  removeItem: any
}

const MultipleInput: React.FC<Props> = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  return (
    <div className={styles.container}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={styles.multipleInput}>
        <input
          type="text"
          name={props.name}
          id={props.name}
          value={value}
          autoComplete='none'
          onChange={(text: any) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name)
            onBlur(name)
          }}
        />
        {/* {console.log(`1 - errors ${name}`, !!errors[name])}
        {console.log(`2 - erro em si ${name}`, errors[name])}
        {console.log(`3 - !value ${name}`, !value)} */}
        <button
          disabled={!!errors[name] || !value}
          onClick={() => {
            if(props.items.includes(value)) {
              alert(`Este item já foi adicionado`)
              return
            }

            props.addItem(value)
            onChange(name)('')
          }}>
          <span>&#43;</span>
        </button>
      </div>

      {(errors[name] && touched[name]) && <InputErrorMessage message={errors[name]} />}
      <div className={styles.itemsContainer}>
        {props.items.map((x: string, i: number) => (
          <span className={styles.item} key={i}>
            {x} <span onClick={() => {
              props.removeItem(x)
            }}>&#8722;</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default MultipleInput