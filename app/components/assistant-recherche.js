import Ember from 'ember';

export default Ember.Component.extend({
        store: Ember.inject.service(),
    classNames:['row', 'mdc-elevation--z8','assistant'],
    user:null,
    nbChilds:0,
    children: Ember.computed('nbChilds', function(){
        console.log(this.get('nbchilds'));
        if(this.get('nbChilds') > this.get('user').get('childrens').size()){
            for(var i=0;i<this.get('nbChilds');i++){
                var child = this.get('store').createRecord('Child',{
                    schoolLevel: null
                });
               this.get('user').get('childrens').pushObject(child); 
            }
        } 
        while(this.get('nbChilds') > this.get('user').get('childrens').size()){
            var lastChild =  this.get('user').get('childrens').get('lastObject');
            this.get('user').get('childrens').removeObject(lastChild);
        }
        return this.get('user').get('childrens'); 
    }),
    didReceiveAttrs: function(){
       var _this=this;
        this._super(...arguments);
         this.get('store').find('user', this.get('user').uid).then(function(user) {
      _this.set('user',user);
       _this.set('nbChilds',_this.get('user').childrens.size());
    }, function() {
      // HACK: `find()` creates an entry in store.typeMapFor().idToRecord which prevents `createRecord()` from working
      delete _this.get('store').typeMapFor(_this.get('store').modelFor('user')).idToRecord[_this.get('user').uid];
      // A user couldn't be found, so create a new user
      var user = _this.get('store').createRecord('user', {
        id: _this.get('user').uid,
        created: new Date().getTime()
      });
      // Save the user
      user.save();
      _this.set('user', user);
       _this.set('nbChilds',2);
         });
       
    }
});
