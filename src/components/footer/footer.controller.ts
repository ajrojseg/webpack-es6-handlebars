export class FooterController {
  private static events() {
    const button = document.getElementById('my-footer-id') as HTMLButtonElement

    button.addEventListener('click', () => {
      alert('FROM FOOTER CONTROLLER')
    })
  }

  // Init of events or any custom function as API calls
  public static async init() {
    return await this.events()
  }
}