import Ember from 'ember';
import MapBboxComponentMixin from 'opendata-rechercheoffre/mixins/map-bbox-component';
import { module, test } from 'qunit';

module('Unit | Mixin | map bbox component');

// Replace this with your real tests.
test('it works', function(assert) {
  let MapBboxComponentObject = Ember.Object.extend(MapBboxComponentMixin);
  let subject = MapBboxComponentObject.create();
  assert.ok(subject);
});
