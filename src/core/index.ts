export class vQuery {
  selector: Element | null

  constructor(selector: string) {
    this.selector = document.querySelector(selector)
  }

  getID() {
    console.log(this.selector)
  }
}
