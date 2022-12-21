import Head from 'next/head'
import styles from '../styles/Form.module.css'
import { NextPage } from 'next'
import InputGroupTitle from '../components/InputGroupTitle'

const Form: NextPage = () => {
  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <InputGroupTitle title='Novo solicitante' />
        <InputGroupTitle title='Adicione dados de contato' />
      </main>
    </>
  )
}

export default Form
