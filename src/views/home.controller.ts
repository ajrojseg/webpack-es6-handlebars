// @ts-ignore
import Home from './home.handlebars'

const cardList = [
  { title: 'First Title', description: 'First Description' },
  { title: 'Second Title', description: 'Second Description' },
  { title: 'Third Title', description: 'Third Description' },
]

export class HomeController {
  // Views usually render a group of components
  // This is how you can dynamically insert data to a component
  private static async render() {
    const content = document.getElementById('card-wrapper') as HTMLDivElement
    content.innerHTML = Home({ cardList })

    return
  }

  public static async init() {
    return await this.render()
  }
}
