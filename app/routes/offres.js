import Ember from 'ember';

export default Ember.Route.extend({
model: function() {

    return this.store.query('offre', {
      limitToLast: 10
    });
  },
afterModel: function(){
    console.log(this.get('model'));
}

});
