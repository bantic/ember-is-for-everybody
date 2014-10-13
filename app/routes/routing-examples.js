import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    throw: function(){
      this.transitionTo('bad');
    }
  }
});
