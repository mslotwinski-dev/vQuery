import { _vQuery } from './header'

import { HtmlModes } from './html/html'
import { ErrorHandler } from '@/handlers/error'

export class vQuery implements _vQuery {
  private query: string
  private selector: Element[]

  constructor(query: string) {
    this.query = query

    const selector = document.querySelectorAll(query)
    this.selector = Array.from(selector)
  }

  private CheckSelectorr() {
    if (!this.selector || this.selector.length == 0) {
      return ErrorHandler(`Invalid query selector "${this.query}"`)
    }
  }

  Inspect() {
    if (this.CheckSelectorr()) return
    console.log(this.selector)
  }

  Html(content: string, mode: HtmlModes = HtmlModes.WRITE) {
    if (this.CheckSelectorr()) return

    for (const el of this.selector) {
      switch (mode as HtmlModes) {
        case HtmlModes.WRITE: {
          el.innerHTML = content
          break
        }

        case HtmlModes.ADD: {
          el.innerHTML += content
          break
        }

        case HtmlModes.REMOVE: {
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
}
