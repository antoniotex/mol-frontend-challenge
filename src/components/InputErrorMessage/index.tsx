import React from 'react'
import styles from './styles.module.css'

type Props = {
  message: string
}

const InputErrorMessage: React.FC<Props> = ({ message }) => {
  return (
      <span className={styles.message}>{message}</span>
  )
}

export default InputErrorMessage