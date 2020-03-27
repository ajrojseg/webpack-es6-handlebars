const footerController = {
  // All events and DOM manipulation for footer component
  events() {
    const button = document.getElementById('my-footer-id')

    button.addEventListener('click', () => {
      alert('FROM FOOTER CONTROLLER')
    })
  },
  // Init of events or any custom function as API calls
  async init() {
    return await this.events()
  }
}

export default footerController
