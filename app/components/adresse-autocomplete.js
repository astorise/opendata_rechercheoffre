import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
   adresse: null,
  filter: null,
  tagName:'',

  filteredList: Ember.computed('filter',  function() {
      if(this.get('filter')===null || this.get('filter')===''){
return null;
      }
      
    return this.get('store').query('adresse', {
  filter: {
    label: (this.get('filter'))
  }
});
  }),
  actions: {
     choose(adresse) {
        this.set('adresse',adresse);
    this.set('filter',this.get('adresse').get('label'));
    }
  }
});