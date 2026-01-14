import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NavigationDemo from './components/NavigationDemo.vue'
import FeedbackDemo from './components/FeedbackDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('NavigationDemo', NavigationDemo)
    app.component('FeedbackDemo', FeedbackDemo)
  }
}
