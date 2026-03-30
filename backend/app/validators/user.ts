import vine from '@vinejs/vine'

/**
 * Shared rules for email and password.
 */
const title = () => vine.string().maxLength(100)

/**
 * Validator to use when performing self-signup
 */
export const createValidator = vine.create({
  title: title(),
  content: vine.string().nullable(),
})

/**
 * Validator to use before validating user credentials
 * during login
 */
export const modifyValidator = vine.create({
  title: title(),
  content: vine.string(),
  id: vine.number().min(0)
})
