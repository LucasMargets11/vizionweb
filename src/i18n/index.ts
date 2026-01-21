import { esAR } from './es-AR'

type Params = Record<string, string | number>

type TranslationNode = Record<string, unknown>

const translations = esAR satisfies TranslationNode

const interpolate = (template: string, params?: Params): string => {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = params[key]
    return value !== undefined ? String(value) : `{${key}}`
  })
}

const resolvePath = (path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as TranslationNode)[segment]
    }
    return undefined
  }, translations)
}

export const t = (key: string, params?: Params): string => {
  const value = resolvePath(key)
  if (typeof value === 'string') {
    return interpolate(value, params)
  }
  return key
}

export const getTranslation = <T = unknown>(key: string): T | undefined => {
  const value = resolvePath(key)
  return value as T | undefined
}

export type TranslationKey = keyof typeof translations
