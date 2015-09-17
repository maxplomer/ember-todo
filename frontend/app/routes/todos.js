import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({ url: '/todos/', dataType: 'json', type: 'GET'});
  }
});