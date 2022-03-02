import { ErrorHandler } from '@/handlers/error'
import { MethodModes } from '@/core/modes'
import { CssArgument } from './argument'

export default (
  selector: HTMLElement[],
  arg: CssArgument,
  mode: MethodModes = MethodModes.WRITE
) => {
  for (const el of selector) {
    switch (mode as MethodModes) {
      case MethodModes.WRITE: {
        for (const prop in arg) {
          el.style.cssText = `${prop}: ${arg[prop]};`
        }
        break
      }

      case MethodModes.ADD: {
        for (const prop in arg) {
          el.style.cssText += `${prop}: ${arg[prop]};`
        }
        break
      }

      case MethodModes.REMOVE: {
        for (const prop in arg) {
          el.style.removeProperty(prop)
        }
        break
      }

      default: {
        return ErrorHandler(
          `Invalid mode, try using one of these:
            > 0 (default) for replacing content
            > 1 for adding content
            > -1 for removing content`
        )
      }
    }
  }
}
