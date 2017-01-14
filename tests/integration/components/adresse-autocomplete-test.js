import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adresse-autocomplete', 'Integration | Component | adresse autocomplete', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adresse-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adresse-autocomplete}}
      template block text
    {{/adresse-autocomplete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
