import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('carte-recherche', 'Integration | Component | carte recherche', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{carte-recherche}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#carte-recherche}}
      template block text
    {{/carte-recherche}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
