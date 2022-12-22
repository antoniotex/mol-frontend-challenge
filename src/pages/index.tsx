import Head from 'next/head'
import styles from '../styles/Form.module.css'
import { NextPage } from 'next'
import InputGroupTitle from '../components/InputGroupTitle'
import CustomInput from '../components/CustomInput'

const Form: NextPage = () => {
  const handleChange = (event: any) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <InputGroupTitle title='Novo solicitante' />
        <CustomInput name='name' label='Nome completo' handleChange={handleChange} />
        <CustomInput name='document' label='Número do documento' handleChange={handleChange} />
        <InputGroupTitle title='Adicione dados de contato' />
      </main>
    </>
  )
}

export default Form
