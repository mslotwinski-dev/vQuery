import { vQuery } from './core'

const $ = (selector: string) => {
  return new vQuery(selector)
}
export default $
