import Ember from 'ember';
import mapBbox from '../mixins/map-bbox-route';

export default Ember.Route.extend(mapBbox,{
model: function() {

    return this.store.query('offre', {
      limitToLast: 10
    });
  }

});
