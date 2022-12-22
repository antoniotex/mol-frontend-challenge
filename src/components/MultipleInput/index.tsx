import React, { useState } from 'react'
import styles from './styles.module.css'

type Props = {
  name: string
  label: string
  items: string[]
  addItem: any
}

const MultipleInput: React.FC<Props> = ({ name, label, items, addItem }) => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{ label }</label>
      <div className={styles.multipleInput}>
        <input type="text" name={name} id={name} onChange={e => setValue(e.target.value)} />
        <button onClick={() => addItem(value)}>Add</button>
      </div>
      <div>
        { items.map((x, i) => (
          <span key={i}>{x}</span>
        )) }
      </div>
    </div>
  )
}

export default MultipleInput