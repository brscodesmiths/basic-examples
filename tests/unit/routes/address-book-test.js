import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | address-book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:address-book');
    assert.ok(route);
  });
});
