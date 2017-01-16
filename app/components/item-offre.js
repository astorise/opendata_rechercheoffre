import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'div',
    attributeBindings: ['itemscope','itemtype'],
    itemscope:"",
    itemtype:"http://schema.org/JobPosting" 
});
