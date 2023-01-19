import '../styles/index.css';

import { createApp } from 'vue';

import {
 FontAwesomeIcon,
 FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

import TestimonialSlider from '../components/TestimonialSlider.vue';
import ServicesAccordion from '../components/ServicesAccordion.vue';

if (document.getElementById('testimonials')) {
 const testimonials = createApp({})
  .component('TestimonialSlider', TestimonialSlider)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('FontAwesomeLayers', FontAwesomeLayers);

 testimonials.mount('#testimonials');
}

if (document.getElementById('servicesaccordion')) {
 const servicesaccordion = createApp({}).component(
  'ServicesAccordion',
  ServicesAccordion
 );

 servicesaccordion.mount('#servicesaccordion');
}
