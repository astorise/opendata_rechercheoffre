import { moduleForModel, test } from 'ember-qunit';

moduleForModel('job-search', 'Unit | Model | job search', {
  // Specify the other units that are required for this test.
  needs: ['model:skill']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
