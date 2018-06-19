import Component from '@ember/component';

export default Component.extend({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  mobileNumber: '',

  actions: {
    createContact()
    {
      // Get form data
      let { firstName, lastName, phoneNumber, mobileNumber } = this;

      // Pass the data up to the controller
      this.get('createContact')({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        mobileNumber: mobileNumber
      });

      // Clear the form
      this.clearForm();
    }
  },

  clearForm()
  {
    this.set('firstName', '');
    this.set('lastName', '');
    this.set('phoneNumber', '');
    this.set('mobileNumber', '');
  }
});
