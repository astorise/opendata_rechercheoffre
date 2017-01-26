import Ember from 'ember';
import mapBbox from '../mixins/map-bbox-route';

export default Ember.Route.extend(mapBbox,{
model: function() {

    return this.store.query('offre', {
      limitToLast: 10
    });
  },
    bbox:'-0.6041622161865234,44.81082668771225,-0.5546379089355469,44.86469050325622',
  	setupController: function (controller, model) {
	this._super(controller, model);
    },


});
