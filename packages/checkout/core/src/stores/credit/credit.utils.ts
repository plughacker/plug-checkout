import { ValidationError } from 'yup'

import { schema } from './credit.schema'
import { CreditForm } from './credit.types'

export const normalizeValidationErrors = (errors: ValidationError[]) => {
  const normalizedErrors = errors.reduce(
    (accumulatorErrors, currentError) => ({
      ...accumulatorErrors,
      [currentError.path]: currentError.message,
    }),
    {},
  )

  return normalizedErrors
}

export const checkIfAllFieldsIsBlank = (data: CreditForm) => {
  const fields = Object.entries(data)

  const filteredBlankFieldValues = fields
    .map(([field, value]) => {
      const isMaskedField = ['expirationDate', 'cvv'].includes(field)
      const normalizedValue = field.replace(/\D/g, '').trim()

      return isMaskedField ? normalizedValue : value
    })
    .filter((field) => !field || field === 'none')

  return fields.length === filteredBlankFieldValues.length
}

export const validateCreditForm = async (
  data: Partial<CreditForm>,
  context?: Record<string, unknown>,
) => {
  try {
    await schema.validate(data, { abortEarly: false, context })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}