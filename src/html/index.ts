import { ErrorHandler } from '@/handlers/error'
import { MethodModes } from '../core/modes'

export default (
  selector: HTMLElement[],
  content: string,
  mode: MethodModes
) => {
  for (const el of selector) {
    switch (mode as MethodModes) {
      case MethodModes.WRITE: {
        el.innerHTML = content
        break
      }

      case MethodModes.ADD: {
        el.innerHTML += content
        break
      }

      case MethodModes.REMOVE: {
        el.innerHTML = el.innerHTML.replace(content, '')
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
