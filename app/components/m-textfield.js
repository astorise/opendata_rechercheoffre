import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
   // classNames:['m-textfield'],
   // classNameBindings:['value:value:none'],
    id: null,
    didInsertElement: function(){
 this.set('id',this.get('childViews')[0].get('elementId'));
    }
});
