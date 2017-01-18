import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames:['m-textfield'],
    classNameBindings:['value:value:none']
});
