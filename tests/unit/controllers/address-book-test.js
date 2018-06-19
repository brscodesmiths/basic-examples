import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | address-book', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:address-book');
    assert.ok(controller);
  });
});
