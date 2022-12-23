import Head from 'next/head'
import styles from '../styles/Form.module.css'
import { NextPage } from 'next'
import InputGroupTitle from '../components/InputGroupTitle'
import CustomInput from '../components/CustomInput'
import CustomSelect, { OptionProps } from '../components/CustomSelect'
import MultipleInput from '../components/MultipleInput'
import { useState } from 'react'
import * as yup from 'yup'
import { Field, Formik } from 'formik'
import { DocumentValidation } from '../validations/documentValidation'

export enum DocumentEnum {
  RG = 1,
  CPF
}

const Form: NextPage = () => {
  const [emails, setEmails] = useState<string[]>([])
  const [phones, setPhones] = useState<string[]>([])

  const documentValidation = new DocumentValidation()

  const documentOptions: OptionProps[] = [
    { title: 'RG', value: DocumentEnum.RG },
    { title: 'CPF', value: DocumentEnum.CPF },
  ]

  const save = async (values: any) => {
    console.log('values: ', values)
  }

  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, ({ min }) => `O nome deve ter entre 2 e 100 caracteres`)
      .max(100, ({ max }) => `O nome deve ter entre 2 e 100 caracteres`)
      .required('O nome é obrigatório'),
    document_type: yup
      .number(),
    document: yup
      .string()
      .required('O número do documento é obrigatório')
      .test('document-validation', 'Número do documento inválido', async (value: any, data: any) => {
        if(data.parent.document_type === DocumentEnum.RG){
          const isValidRg = documentValidation.rg(value)
          return isValidRg
        } else if (data.parent.document_type === DocumentEnum.CPF) {
          const isValidCpf = documentValidation.cpf(value)
          return isValidCpf
        }

        return true
      }),
    email: yup
      .string()
      .email("Informe um e-mail válido")
      .test('email-validation', 'É necessário informar ao menos 1 endereço de email', async (value: any) => {
        if(emails.length > 0) {
          return true
        }

        if(emails.length === 0 && !!value) {
          return true
        }

        return false
      }),
    phone: yup
      .string()
      .matches(/^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/, 'Informe um telefone válido')
      .test('phone-validation', 'É necessário informar ao menos 1 número de telefone', async (value: any, data: any) => {
        if(phones.length > 0) {
          return true
        }

        if(phones.length === 0 && !!value) {
          return true
        }

        return false
      }),
  })

  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Formik
          validationSchema={formValidationSchema}
          initialValues={{name: '', document_type: 1, document: '', email: '', phone: '', }}
          onSubmit={save}
        >
          {({ handleSubmit, isValid, dirty }) => (
            <>
              <InputGroupTitle title='Novo solicitante' />
              <Field name='name' label='Nome completo' component={CustomInput} />
              <Field name='document_type' label='Tipo de documento' options={documentOptions} component={CustomSelect} />
              <Field name='document' label='Número do documento' doc='true' component={CustomInput} />
              <InputGroupTitle title='Adicione dados de contato' />
              <Field
                name='email'
                label='Adicionar e-mail'
                items={emails}
                addItem={(v: string) => setEmails([...emails, v])}
                removeItem={(v: string) => {
                  const updatedItems = emails.filter(e => e !== v)
                  setEmails(updatedItems)
                }}
                component={MultipleInput} />
                <Field
                  name='phone'
                  label='Adicionar telefone'
                  items={phones}
                  addItem={(v: string) => setPhones([...phones, v])}
                  removeItem={(v: string) => {
                    const updatedItems = phones.filter(e => e !== v)
                    setPhones(updatedItems)
                  }}
                  component={MultipleInput}
                />
              <button className={styles.submitButton} type='submit' onClick={() => handleSubmit()} disabled={(!dirty || !isValid) || (emails.length === 0 || phones.length === 0)}>Salvar</button>
            </>
          )}
        </Formik>
      </main>
    </>
  )
}

export default Form
