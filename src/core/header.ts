import { MethodModes } from './modes'
import { CssArgument } from '@/css/argument'

export interface _vQuery {
  Inspect: () => void
  Html: (content: string, mode: MethodModes) => void
  Css: (content: CssArgument, mode: MethodModes) => void
}
