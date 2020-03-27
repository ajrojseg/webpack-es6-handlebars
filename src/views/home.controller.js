import Card from '../components/card/card.handlebars'

const cardList = [
  { title: 'First Title', description: 'First Description' },
  { title: 'Second Title', description: 'Second Description' },
  { title: 'Third Title', description: 'Third Description' },
]

const homeController = {
  // Views usually render a group of components
  // This is how you can dynamically insert data to a component
  async render() {
    const content = document.getElementById('card-wrapper')

    content.innerHTML = Card({
      cardList
    })

    return
  },
  async init() {
    return await this.render()
  }
}

export default homeController
