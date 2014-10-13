import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve){
      Ember.run.later(function(){
        var user = {name: 'Slow Person'};

        resolve(user);
      }, 1500);
    });
  }
});
