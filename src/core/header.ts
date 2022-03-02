import { MethodModes } from './modes'
import { CssArgument } from '@/css/argument'

export interface _vQuery {
  Inspect: () => void
  Html: (content: string, mode: MethodModes) => void
  Style: (content: CssArgument, mode: MethodModes) => void
}
