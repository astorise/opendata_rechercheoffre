import Ember from 'ember';
import MapActionsMixin from 'opendata-rechercheoffre/mixins/map-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | map actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let MapActionsObject = Ember.Object.extend(MapActionsMixin);
  let subject = MapActionsObject.create();
  assert.ok(subject);
});
