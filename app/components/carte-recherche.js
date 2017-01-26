import Ember from 'ember';
import mapActions from '../mixins/map-actions';
import mapBbox from '../mixins/map-bbox-controller';

export default Ember.Component.extend(mapActions,mapBbox,{
        classNames:['row', 'mdc-elevation--z8','carte'],
    leafletBounds:[[44.81082668771225,-0.6252765655517578],[44.86469050325622,-0.5336093902587891]],
    
});
