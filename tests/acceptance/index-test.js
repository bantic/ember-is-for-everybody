import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    var h1 = find('h1:contains(Ember Is For Everybody)');
    equal(h1.length,
          1,
          'has title');

    equal(find('a[href="/data-binding"]').length,
          1,
          'has link to data-binding demo');

    equal(currentURL(), '/');
  });
});
