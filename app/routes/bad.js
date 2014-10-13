import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    throw new Error("Oops, this route had an error.");
  }
});
