import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: function(key, value){
    if (arguments.length > 1) { // setter
      var fullName  = value,
          names     = fullName.split(' '),
          firstName = names[0],
          lastName  = names[1];

      this.setProperties({
        firstName: firstName,
        lastName:  lastName
      });
    }

    if (this.get('firstName') && this.get('lastName')) {
      return this.get('firstName') + ' ' +
        this.get('lastName');
    }
  }.property('firstName', 'lastName')
});
