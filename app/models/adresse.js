import DS from 'ember-data';

export default DS.Model.extend({
  housenumber: DS.attr('string'),
  label: DS.attr('string'),
  postcode: DS.attr('number'),
  citycode: DS.attr('string'),
//  id: DS.attr('string'),
  name: DS.attr('string'),
  city: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number')
});
