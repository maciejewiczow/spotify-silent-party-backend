import { createParamDecorator } from 'routing-controllers'

export interface Locals {
    [key: string]: any
}

export function Locals(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options ? options.required : false,
        value: action => action.response.locals
    })
}

export function LocalParam(key: string, options?: { required?: boolean }) {
    return createParamDecorator({
        required: options ? options.required : false,
        value: action => action.response.locals[key] || undefined
    })
}