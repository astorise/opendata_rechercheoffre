import Ember from 'ember';
import mapActions from '../mixins/map-actions';
import mapBbox from '../mixins/map-bbox-controller';

export default Ember.Controller.extend(mapActions,mapBbox,{
  queryParams: ['dialog'],
  dialog: null

});
