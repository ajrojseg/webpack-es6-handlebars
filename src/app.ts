// @ts-ignore
import headerController from './components/header/header.controller'
// @ts-ignore
import footerController from './components/footer/footer.controller'
import homeController from './views/home.controller'

const App = () => {
  // Invoke init method of all the components after DOM is loaded
  document.addEventListener('DOMContentLoaded', async () => {
    await headerController.init()
    await footerController.init()
    await homeController.init()
  })
}

export default App
