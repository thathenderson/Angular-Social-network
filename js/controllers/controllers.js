//Controller
var Controllers = angular.module('Controllers', [])
	.controller('GotChosenController', ['$scope', '$filter', function($scope, $filter) {

		$scope.newPost = '';
		$scope.order = "-timePosted";

		$scope.user = {
			name: "GotChosen",
			avatarSrc: "/images/gc-thumbsup.png"
		}

		//static model data
		$scope.posts = [
			{
				id: 1,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ipsum sodales ex pretium, id porta massa consequat. Etiam pretium est tellus. Nunc volutpat ipsum vel ligula convallis bibendum. Maecenas non purus tortor.",
				likeCount: 345,
				shareCount: 150,
				shareScope: "publicly",
				timePosted: "2014-09-12",
				type: "text"
			},
			{
				id: 2,
				content: "Me_guy.jpg",
				likeCount: 457,
				shareCount: 300,
				shareScope: "publicly",
				photoCaption: "Here's a little guy that I drew.",
				timePosted: "2014-09-14",
				type: "photo"
			},
			{
				id: 3,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis placerat dolor, at blandit dolor imperdiet et. Integer scelerisque eros eget ex varius, eget venenatis quam viverra. Nulla pulvinar non urna in malesuada. Fusce vitae felis egestas, congue massa quis, sodales libero. Nunc eleifend tortor enim, pharetra lobortis magna dapibus vehicula. Fusce iaculis vehicula velit, quis eleifend enim ultricies aliquet. Sed efficitur sapien a diam lacinia, malesuada dapibus erat lobortis. Fusce posuere hendrerit nulla a congue.\n\nVivamus sit amet nisl et ligula auctor blandit. Phasellus bibendum enim in risus hendrerit, ut auctor nibh semper. Fusce vel libero consequat, semper lorem vestibulum, tristique mauris. Quisque et justo sed risus mollis vestibulum. Ut justo nisi, tincidunt nec nibh eu, tempor sodales metus. Mauris eu ex purus. Sed tempus justo eu tellus congue aliquet. Suspendisse potenti.",
				likeCount: 50,
				shareCount: 10,
				shareScope: "privately",
				timePosted: "2014-09-10",
				type: "text"
			}
		];

		$scope.comments = [
			{
				postId: 1,
				commentList: [
					{ name: "GotChosen", comment: "This is pretty great!", time: "4 hours ago" }
				]
			},
			{
				postId: 2,
				commentList: [
					{ name: "DudeBro13", comment: "This is terrible. Hail Satan.", time: "12:15pm" },
					{ name: "Grandma", comment: "I have this great joke about lightbulbs. - Grandma", time: "2 days ago" }
				]
			},
			{
				postId: 3,
				commentList: []
			}
		];

		$scope.submitPost = function() {
			var postId = $scope.posts.length + 1;
			var newPost = $scope.newPost.trim();
			var date = new Date();
			var month = date.getMonth()+1;

			if (month.toString().length == 1) {
				month = "0" + month;
			}

			var now = date.getFullYear() + "-" + month + "-" + date.getDate();

			if (newPost.length === 0) {
				return;
			}

			var newPostObj = {
				id: postId,
				content: newPost,
				likeCount: 0,
				shareCount: 0,
				shareScope: "privately",
				timePosted: now,
				type: "text"
			}

			$scope.posts.push(newPostObj);
			$scope.newPost = '';
		};

		$scope.removePost = function(id) {
			$scope.posts.splice((id-1), 1);
		};

		$scope.likePost = function(id) {
			$scope.posts[id-1].likeCount++;
		};

		$scope.sharePost = function(id) {
			$scope.posts[id-1].shareCount++;
		};
}]);