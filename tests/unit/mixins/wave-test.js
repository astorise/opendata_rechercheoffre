import Ember from 'ember';
import WaveMixin from 'opendata-rechercheoffre/mixins/wave';
import { module, test } from 'qunit';

module('Unit | Mixin | wave');

// Replace this with your real tests.
test('it works', function(assert) {
  let WaveObject = Ember.Object.extend(WaveMixin);
  let subject = WaveObject.create();
  assert.ok(subject);
});
