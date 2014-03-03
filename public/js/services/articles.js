'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.articles').factory('Articles', ['$resource', function($resource) {
    return $resource('articles/:articleId:actionId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
		myArticles:{
			params: {
				actionId: 'myarticles'
			},
			isArray: true
		}
    });
}]);