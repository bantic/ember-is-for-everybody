import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('data-binding');
  this.route('computed-properties');
  this.route('cp-setters');
  this.route('routing-examples');
  this.route('bad');
  this.route('slow');
  this.route('qp-demo');
});

export default Router;
