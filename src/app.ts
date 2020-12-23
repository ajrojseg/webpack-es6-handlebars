import { HeaderController } from './components/header/header.controller'
import { FooterController } from './components/footer/footer.controller'
import { HomeController } from './views/home.controller'

const App = () => {
  // Invoke init method of all the components after DOM is loaded
  document.addEventListener('DOMContentLoaded', async () => {
    await HeaderController.init()
    await FooterController.init()
    await HomeController.init()
  })
}

export default App
