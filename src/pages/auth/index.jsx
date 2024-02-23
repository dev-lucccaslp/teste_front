import { useMemo } from 'react';
import { CustomInput } from '../../components/CustomInput'
import { Lock, User } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { Formik, Field } from 'formik'

import * as Yup from "yup";

export default function PageSignIn() {

  const { onSignIn } = useAuth()

  const handleSubmitForm = async (data) => {
    onSignIn(data)
    alert('teste')
    console.log(data)
  }

  const initialValues = useMemo(() => {
    return {
      email: "",
      password: "",

    };
  }, []);

  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string().required("Campo obrigatório"),
      password: Yup.string().required("Campo obrigatório"),
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800 w-screen h-screen ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({ handleSubmit}) => (

              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white "
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <Field
                      // dataTestId="input-email-login-user"
                      placeholder="Email"
                      // icon={<User size={16} className="text-white" />}
                      type="email"
                      name={'email'}
                      id={'email'}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Senha"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Senha
                    </label>

                  </div>
                  <div className="mt-2">
                    <Field
                      // dataTestId="input-password-login-user"
                      placeholder="Senha"
                      // icon={<Lock size={16} className="text-white" />}
                      type={'password'}
                      name={'password'}
                      id={'password'}
                    />
                  </div>
                </div>

                <div>
                  <button
                    // data-testid="sign-in-button"
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-gray-700  
                    px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}