import Ember from 'ember';
import Sortable from 'nomad-ui/mixins/sortable';

const { Controller, computed, inject } = Ember;

export default Controller.extend(Sortable, {
  jobController: inject.controller('jobs.job'),

  queryParams: {
    currentPage: 'page',
    searchTerm: 'search',
    sortProperty: 'sort',
    sortDescending: 'desc',
  },

  currentPage: 1,
  pageSize: 10,

  sortProperty: 'name',
  sortDescending: false,

  breadcrumbs: computed.alias('jobController.breadcrumbs'),

  taskGroups: computed('model.taskGroups.[]', function() {
    return this.get('model.taskGroups') || [];
  }),

  listToSort: computed.alias('taskGroups'),
  sortedTaskGroups: computed.alias('listSorted'),
});
