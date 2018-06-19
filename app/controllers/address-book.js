import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createContact(data)
    {
      // Create the contact and add it to the store
      this.get('store').createRecord('contact', data);
    }
  }
});
