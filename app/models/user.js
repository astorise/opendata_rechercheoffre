import DS from 'ember-data';

export default DS.Model.extend({
  adresse: DS.belongsTo('adresse'),
  licence: DS.attr('boolean'),
  carOwner: DS.attr('boolean'),
  jobSearch: DS.belongsTo('job-search'),
  childrens: DS.hasMany('child'),
  handicap: DS.attr('boolean')
});
