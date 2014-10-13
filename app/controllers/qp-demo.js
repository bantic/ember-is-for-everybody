import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'count'],

  // defaults
  page: 1,
  count: 10
});
