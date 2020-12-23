export class HeaderController {
  // All events and DOM manipulation for header component
  private static events() {
    const button = document.getElementById('my-header-id') as HTMLButtonElement

    button.addEventListener('click', () => {
      alert('FROM HEADER CONTROLLER')
    })
  }

  // Init of events or any custom function as API calls
  public static async init() {
    return await this.events()
  }
}