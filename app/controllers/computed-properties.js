import Ember from 'ember';

export default Ember.Controller.extend({
  name: function(){
    var first = this.get('firstName'),
        last  = this.get('lastName');
    if (!first || !last) { return; }

    return first + ' ' + last;
  }.property('firstName','lastName')
});
