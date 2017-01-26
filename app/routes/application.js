import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
     this.get('session').open('firebase', { provider: 'anonymous'}).then(function() {
      });
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').close();
      this.get('session').open('firebase', { provider: provider}).then(function() {
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});