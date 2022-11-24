import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { MapPin, Warning } from "phosphor-react";

import { FormValidation } from "../../services/validationForm";

const initialValues = {
  CEP: "",
  Complemento: "",
  Numero: "",
  Rua: "",
  Bairro: "",
  Cidade: "",
  UF: "",
};

export default function OrderEntry({ dataFormProps, dataForm }: any) {
  const [dataFormBoolean, setDataFormBoolean] = useState(
    dataForm ? true : false
  );

  return (
    <div className="container m-auto px-4 xl:p-0 flex items-center flex-col justify-center xl:block">
      <div className="relative w-full max-w-[640px] m-auto">
        <h1 className="text-base-subtitle text-lg font-bold mb-4 mt-7">
          Complete seu pedido
        </h1>
      </div>

      <div className="max-w-[640px] w-full bg-base-card p-10 rounded-md">
        <header className="flex gap-1 mb-8">
          <MapPin className="text-2xl text-yellow-dark relative top-1" />
          <div className="flex flex-col">
            <h2 className="text-base-subtitle">Endereço de entrega</h2>
            <p className="text-base-label">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </header>
        <Formik
          initialValues={initialValues}
          validationSchema={FormValidation}
          onSubmit={(values) => {
            dataFormProps(values);
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className=" flex flex-col gap-4">
              <div className="flex flex-col relative w-full xl:max-w-[200px]">
                <Field
                  placeholder="CEP"
                  name="CEP"
                  className={`bg-base-button h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                    errors.CEP &&
                    touched.CEP &&
                    ` border-red-500 border focus:outline-red-500`
                  }`}
                  value={dataFormBoolean && dataForm ? dataForm.CEP : undefined}
                />
                {errors.CEP && touched.CEP && (
                  <label
                    className="text-red-500 absolute top-3 right-2"
                    title={errors.CEP}
                  >
                    <Warning />
                  </label>
                )}
              </div>

              <div className="flex flex-col relative">
                <Field
                  placeholder="Rua"
                  name="Rua"
                  className={`bg-base-button h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                    errors.Rua &&
                    touched.Rua &&
                    ` border-red-500 border focus:outline-red-500`
                  }`}
                  value={dataFormBoolean && dataForm ? dataForm.Rua : undefined}
                />
                {errors.Rua && touched.Rua && (
                  <label
                    className="text-red-500 absolute top-3 right-2"
                    title={errors.Rua}
                  >
                    <Warning />
                  </label>
                )}
              </div>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="xl:max-w-[200px] w-full relative">
                  <Field
                    placeholder="Número"
                    name="Numero"
                    className={`bg-base-button w-full h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                      errors.Numero &&
                      touched.Numero &&
                      ` border-red-500 border focus:outline-red-500`
                    }`}
                    value={
                      dataFormBoolean && dataForm ? dataForm.Numero : undefined
                    }
                  />
                  {errors.Numero && touched.Numero && (
                    <label
                      className="text-red-500 absolute top-3 right-2"
                      title={errors.Numero}
                    >
                      <Warning />
                    </label>
                  )}
                </div>
                <div className="w-full">
                  <Field
                    placeholder="Complemento"
                    name="Complemento"
                    className={`bg-base-button w-full h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                      errors.Complemento &&
                      touched.UF &&
                      ` border-red-500 border focus:outline-red-500`
                    }`}
                    value={
                      dataFormBoolean && dataForm
                        ? dataForm.Complemento
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="relative">
                  <Field
                    placeholder="Bairro"
                    name="Bairro"
                    className={`bg-base-button w-full xl:max-w-[200px] h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                      errors.Bairro &&
                      touched.Bairro &&
                      ` border-red-500 border focus:outline-red-500`
                    }`}
                    value={
                      dataFormBoolean && dataForm ? dataForm.Bairro : undefined
                    }
                  />
                  {errors.Bairro && touched.Bairro && (
                    <label
                      className="text-red-500 absolute top-3 right-2"
                      title={errors.Bairro}
                    >
                      <Warning />
                    </label>
                  )}
                </div>
                <div className="w-full relative">
                  <Field
                    placeholder="Cidade"
                    name="Cidade"
                    className={`bg-base-button w-full h-[42px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                      errors.Cidade &&
                      touched.Cidade &&
                      ` border-red-500 border focus:outline-red-500`
                    }`}
                    value={
                      dataFormBoolean && dataForm ? dataForm.Cidade : undefined
                    }
                  />
                  {errors.Cidade && touched.Cidade && (
                    <label
                      className="text-red-500 absolute top-3 right-2"
                      title={errors.Cidade}
                    >
                      <Warning />
                    </label>
                  )}
                </div>
                <div className="relative">
                  <Field
                    placeholder="UF"
                    name="UF"
                    className={`bg-base-button h-[42px] w-full xl:w-[60px] placeholder:pl-2 p-4 focus:outline-yellow-dark ${
                      errors.UF &&
                      touched.UF &&
                      ` border-red-500 border focus:outline-red-500`
                    }`}
                    value={
                      dataFormBoolean && dataForm ? dataForm.UF : undefined
                    }
                  />
                  {errors.UF && touched.UF && (
                    <label
                      className="text-red-500 absolute top-3 right-2"
                      title={errors.UF}
                    >
                      <Warning />
                    </label>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center mt-5">
                <button
                  type="submit"
                  className={`w-full max-w-[268px] h-[46px] text-white ${
                    !dataFormBoolean
                      ? `bg-yellow-normal  hover:bg-yellow-dark`
                      : `bg-yellow-dark hover:bg-yellow-normal text-yellow-light `
                  }`}
                  onClick={() => setDataFormBoolean(!dataFormBoolean)}
                >
                  {dataFormBoolean ? " Habilitar form" : "Salvar dados"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
