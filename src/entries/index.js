import '../styles/index.css';

import { createApp } from 'vue';

import {
 FontAwesomeIcon,
 FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

import TestimonialSlider from '../components/TestimonialSlider.vue';

if (document.getElementById('testimonials')) {
 const testimonials = createApp({})
  .component('TestimonialSlider', TestimonialSlider)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('FontAwesomeLayers', FontAwesomeLayers);

 testimonials.mount('#testimonials');
}
