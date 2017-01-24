import DS from 'ember-data';

export default DS.Model.extend({
  job: DS.attr('string'),
  priority: DS.attr('string'),
  skills: DS.hasMany('skill')
});
