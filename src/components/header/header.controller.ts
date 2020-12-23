const headerController = {
  // All events and DOM manipulation for header component
  events() {
    const button = document.getElementById('my-header-id') as HTMLButtonElement

    button.addEventListener('click', () => {
      alert('FROM HEADER CONTROLLER')
    })
  },
  // Init of events or any custom function as API calls
  async init() {
    return await this.events()
  }
}

export default headerController
