import './bootstrap';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { md1 } from 'vuetify/blueprints'

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md1,
})
