import { _vQuery } from './header'

import { vQueryDecorator } from '@/decorators/main'

import { ErrorHandler } from '@/handlers/error'
import { MethodModes } from './modes'
import { CssArgument } from '@/css/argument'

import HtmlService from '@/html'
import CssService from '@/css'

@vQueryDecorator()
export class vQuery implements _vQuery {
  private query: string
  private selector: HTMLElement[]

  constructor(query: string) {
    this.query = query

    const selector = document.querySelectorAll(query)
    this.selector = Array.from(selector) as HTMLElement[]
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

  Html(content: string, mode: MethodModes = MethodModes.WRITE) {
    if (this.CheckSelectorr()) return

    HtmlService(this.selector, content, mode)
  }

  Css(content: CssArgument, mode: MethodModes = MethodModes.ADD) {
    if (this.CheckSelectorr()) return

    CssService(this.selector, content, mode)
  }
}
