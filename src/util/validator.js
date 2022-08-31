import { helpers } from '@vuelidate/validators'

export const validatePassword = () => {
    const regexp = /.*[0-9a-zA-Z!@#$%^&*]{6,}/i
    return helpers.withParams(
        { type: 'mustBeCool' },
        (password) => !helpers.req(password) || regexp.test(password)
    )
}
