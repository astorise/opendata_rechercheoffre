import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
  filter: null,
  filteredList: Ember.computed('filter',  function() {
      if(this.get('filter')===null){
return null;
      }
      
    return this.get('store').query('adresse', {
  filter: {
    label: (this.get('filter'))
  }
});
  }),
  actions: {
    autoComplete() {
     this.get('store').query('adresse', {
  filter: {
    label: (this.get('filter'))
  }
}).then(function(adresse) {
  this.set('filter',adresse);
});
    },
    search() {
      this.get('search')(this.get('filter'));
    },
    choose(city) {
      this.set('filter',city);
    }
  }
});