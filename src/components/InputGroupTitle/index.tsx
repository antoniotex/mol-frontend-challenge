import React from 'react'
import styles from './styles.module.css'

type Props = {
  title: string
}

const InputGroupTitle: React.FC<Props> = ({ title }) => {
  return (
      <legend className={styles.title}>{title}</legend>
  )
}

export default InputGroupTitle