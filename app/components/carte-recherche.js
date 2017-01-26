import Ember from 'ember';
import mapActions from '../mixins/map-actions';
import mapBbox from '../mixins/map-bbox-component';

export default Ember.Component.extend(mapActions,mapBbox,{
        classNames:['row', 'mdc-elevation--z8','carte'],
        offres:null
    
});
