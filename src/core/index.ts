import { _vQuery } from './header'

import { vQueryDecorator } from '@/decorators/main'
import { MethodModes } from './modes'
import { ErrorHandler } from '@/handlers/error'
import { CssArgument } from '@/css/argument'

import HtmlService from '@/html'
import StyleService from '@/css'

/*
 * This class is the core of the entire vQuery library.
 * Most of the methods and classes declared, here are
 * combined into one whole class.
 */

@vQueryDecorator()
export class vQuery implements _vQuery {
  /*
   * Query property is used only in errors handlers,
   * when we have to say, which selector is invalid.
   * In turn, the selector property is an array of elements
   * that our query has detected
   */

  private query: string
  private selector: HTMLElement[]

  constructor(query: string) {
    this.query = query
    const selector = document.querySelectorAll(query)
    this.selector = Array.from(selector) as HTMLElement[]
  }

  /*
   * Helper function which throws error, when our
   * selector is invalid, or no elements are found.
   */

  private CheckSelector() {
    if (!this.selector || this.selector.length == 0) {
      return ErrorHandler(`Invalid query selector "${this.query}"`)
    }
  }

  /*
   * Inspect method can display every element, which match our
   * selector. Its operation is very simple, all it does is list
   * an array of all the items in the selector. As one of the few
   * methods, it doesn't validate a selector, in which case it
   * simply outputs an empty array.
   *
   * Example: $('.foo').Inspect()
   * Output: "[div.foo, section.foo#bar]"
   */

  Inspect() {
    console.log(this.selector)
  }

  /*
   * The html method allows you to modify the data of elements stored
   * in the selector. It takes value and mode as arguments. Value is
   * a text or html element to be added, removed or overwritten The
   * mode allows us to choose whether we want to add, remove or
   * overwrite content. Default mode is overwriting.
   *
   * Examples:
   *  $('.foo).Html('bar')
   *  $('.foo').Html('<div> Hello World </div>')
   *  $('.foo').Html('This text is added', 1)
   */

  Html(content: string, mode: MethodModes = MethodModes.WRITE) {
    if (this.CheckSelector()) return

    HtmlService(this.selector, content, mode)
  }

  /*
   *
   */

  Style(content: CssArgument, mode: MethodModes = MethodModes.ADD) {
    if (this.CheckSelector()) return

    StyleService(this.selector, content, mode)
  }

  /*
   *
   */

  Css() {
    //
  }

  /*
   *
   */

  Events() {
    //
  }
}
