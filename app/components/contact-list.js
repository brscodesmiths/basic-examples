import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteContact(contact)
    {
      // Remove the contact
      contact.unloadRecord();
    }
  }
});
