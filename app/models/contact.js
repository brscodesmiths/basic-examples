import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  mobileNumber: DS.attr('string'),

  fullName: Ember.computed('firstName', 'lastName', function()
  {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
