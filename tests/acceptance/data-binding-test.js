import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: DataBinding', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /data-binding', function() {
  visit('/data-binding');

  andThen(function() {
    fillIn('input:eq(0)', 'Foo');
  });

  andThen(function(){
    equal( find('p:contains(Your name is: Foo)').length,
           1,
           'shows name');
  });
});
