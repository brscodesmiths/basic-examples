import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return {
      contacts: this.get('store').peekAll('contact')
    };
  }
});
