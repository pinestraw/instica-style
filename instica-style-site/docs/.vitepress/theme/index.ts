import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NavigationDemo from './components/NavigationDemo.vue'
import FeedbackDemo from './components/FeedbackDemo.vue'
import ButtonsDemo from './components/ButtonsDemo.vue'
import FormsDemo from './components/FormsDemo.vue'
import DataDisplayDemo from './components/DataDisplayDemo.vue'
import LayoutDemo from './components/LayoutDemo.vue'
import MobileIOSDemo from './components/MobileIOSDemo.vue'
import TypographyDemo from './components/TypographyDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('NavigationDemo', NavigationDemo)
    app.component('FeedbackDemo', FeedbackDemo)
    app.component('ButtonsDemo', ButtonsDemo)
    app.component('FormsDemo', FormsDemo)
    app.component('DataDisplayDemo', DataDisplayDemo)
    app.component('LayoutDemo', LayoutDemo)
    app.component('MobileIOSDemo', MobileIOSDemo)
    app.component('TypographyDemo', TypographyDemo)
  }
}
