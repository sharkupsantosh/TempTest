# TempTest

var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = []; //declare an empty array
	$http.get("https://api.myjson.com/bins/62lc5").success(function(response){
		$scope.users = response;  //ajax request to fetch data into $scope.data
		$scope.sortBy = 'emp_name';
	});

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});

<!doctype html>
<html lang="en" ng-app="angularTable">

<head>
  <meta charset="utf-8">
  <script src="lib/angular.js"></script>
  <script src="lib/dirPagination.js"></script>
  <script src="app/app.js"></script>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>

<body>
  <div role="main" class="container theme-showcase">
    <div class="" style="margin-top:90px;">
      <div class="col-lg-12">
        <div class="bs-component" ng-controller="listdata">
          <form class="form-inline">
            <div class="form-group">
              <label>Search</label>
              <input type="text" ng-model="search.emp_name" class="form-control" placeholder="Search">
            </div>
          </form>
          <table class="table table-striped table-hover" id="customtable">
            <thead>
              <tr>
                <th ng-click="sort('emp_name')">Name
                  <span class="glyphicon sort-icon" ng-show="sortKey=='emp_name'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
                </th>
                <th ng-click="sort('emp_dept')">Department
                  <span class="glyphicon sort-icon" ng-show="sortKey=='emp_dept'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
                </th>
                <th>Role
                  <span class="glyphicon sort-icon" ng-show="sortKey=='emp_role'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
                </th>
                <th>Type
                  <span class="glyphicon sort-icon" ng-show="sortKey=='emp_type'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr dir-paginate="user in users|orderBy:sortKey:reverse|filter:search|itemsPerPage:5">
                <td>{{user.emp_name}}</td>
                <td>{{user.emp_dept}}</td>
                <td>{{user.emp_role}}</td>
                <td>{{user.emp_type}}</td>
              </tr>
            </tbody>
          </table>
          <dir-pagination-controls max-size="5" direction-links="true" boundary-links="true">
          </dir-pagination-controls>
        </div>
      </div>
    </div>
  </div>

</body>

</html>
