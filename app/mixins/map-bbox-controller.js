/* global moment */

import Ember from 'ember';

export default Ember.Mixin.create({
      queryParams: ['bbox','onestop_id', 'isochrone_mode', 'pin', 'departure_time', 'include_operators', 'exclude_operators', 'include_routes', 'exclude_routes', 'stop']

	
});
