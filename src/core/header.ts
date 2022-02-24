import { HtmlModes } from './html/html'

export interface _vQuery {
  Inspect: () => void
  Html: (content: string, mode: HtmlModes) => void
}
