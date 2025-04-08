import type { ISchema, ObjectShape, Reference } from 'yup'
import type { ChangeEvent, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'
import { object } from 'yup'

export const useForm = <T>(
  defaultValues: T,
  validation: Partial<
    Record<keyof T, ISchema<any, any, any, any> | Reference<unknown>>
  >
): [
  Partial<Record<keyof T, string[]>>,
  T,
  React.Dispatch<SetStateAction<T>>,
  Partial<Record<keyof T, boolean>>,
] => {
  const schema = useRef(object(validation as ObjectShape))
  const initialValues = useRef<T>(defaultValues)

  const [init, setInit] = useState(true)
  const [value, setValue] = useState<T>(defaultValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string[]>>>({})

  const [hasChange, setHasChange] = useState<Partial<Record<keyof T, boolean>>>(
    {}
  )

  useEffect(() => {
    if (!init) {
      for (const key of Object.keys(initialValues.current as object)) {
        if (value[key as keyof T] !== initialValues.current[key as keyof T]) {
          setHasChange((prev) => ({ ...prev, [key]: true }))
        }
      }

      return
    }

    setInit(false)
  }, [setHasChange, init, value])

  useEffect(() => {
    const errors: any = {}

    schema.current
      .validate(value, { abortEarly: false })
      .then(() => {
        setErrors(errors)
      })
      .catch(function (err) {
        err.inner.forEach((inner: any) => {
          errors[inner.path as string] = inner.errors
        })

        setErrors(errors)
      })
  }, [value])

  return [errors, value, setValue, hasChange]
}

export const formPropsHelper = <T>(
  key: keyof T,
  errors: ReturnType<typeof useForm<T>>[0],
  form: ReturnType<typeof useForm<T>>[1],
  setForm: ReturnType<typeof useForm<T>>[2],
  formChanges: ReturnType<typeof useForm<T>>[3]
): {
  error?: boolean
  helpertext?: string
  value: any
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} => ({
  error: errors[key] && formChanges[key],
  helpertext: formChanges[key] && errors[key]?.[0],
  value: form[key],
  onChange: (event: ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value })),
})
