export default function routes($stateProvider) {
  $stateProvider
    .state('courses', {
      url: '/courses',
      template: require('./courses.html'),
    })
    .state('courses.list', {
      url: '/list',
      template: require('./courses.list.html'),
      controller: 'CoursesListController',
      controllerAs: 'coursesList',
    })
    .state('courses.add', {
      url: '/add',
      template: require('./courses.add.html'),
      controller: 'CoursesAddController',
      controllerAs: 'coursesAdd',
    })
    .state('courses.update', {
      url: '/update/:cid',
      template: require('./courses.add.html'),
      controller: 'CoursesUpdateController',
      controllerAs: 'coursesAdd',
    })
}

routes.$inject = ['$stateProvider']
