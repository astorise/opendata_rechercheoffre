import Ember from 'ember';
import MapBboxRouteMixin from 'opendata-rechercheoffre/mixins/map-bbox-route';
import { module, test } from 'qunit';

module('Unit | Mixin | map bbox route');

// Replace this with your real tests.
test('it works', function(assert) {
  let MapBboxRouteObject = Ember.Object.extend(MapBboxRouteMixin);
  let subject = MapBboxRouteObject.create();
  assert.ok(subject);
});
