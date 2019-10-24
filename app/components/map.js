import Component from '@ember/component';
import mapboxgl from 'mapbox-gl';

import config from 'mapbox-gl-test/config/environment';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    mapboxgl.accessToken = config.mapbox.token;

    new mapboxgl.Map({
      container: 'map-container',
      style: config.mapbox.style
    });
  }
});
