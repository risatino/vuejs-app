document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Pink Martians!',
      reviews: [
                { 
                  text: "How was your trip to planet Earthe?",
                  rating: 5,
                  reviewer: "Jamz"  
                },
                { 
                  text: "I miss Rails.",
                  rating: 8,
                  reviewer: "Jewels"
                },
                { 
                  text: "Have you heard the latest Django Reinhardt jamz?",
                  rating: 3,
                  reviewer: "Jimbo"
                }
                ],
      newReviewText: '',
      newReviewRating: '',
      newReviewReviewer: ''

      tasks: [
              "take out the trash",
              "sweep the front walk",
              "buy noosa yoghurt",
              "do a happy python dance"
      ],
      newTask: ''
    },
    methods: {
        addReview: function() {
          if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewReviewer !== ''){
            var reviewObj = {
                            text: this.newReviewText,
                            rating: this.newReviewRating,
                            reviewer: this.newReviewReviewer
                            };
            this.reviews.push(reviewObj);
            
            this.newReviewText = '';
            this.newReviewRating = '';
            this.newReviewReviewer = '';
          }
        },
        isPositive: function(inputReview) {
          return inputReview.indexOf('stupid') === -1;
        }
      },
        completeReview: function(inputReview) {
          var index = this.reviews.indexOf(inputReview);
          this.reviews.splice(inputReview, 1);
        }
      },
      addTask: function() {
        if (this.newTask.length > 0) {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(inputTask, 1);
      }
  });
});

// document.addEventListener("DOMContentLoaded", function(event) {
//   var app = new Vue({
//     el: '#app',
//     data: {
//       reviews: [
//                 { 
//                   text: "Vue.js is so cool",
//                   rating: 8,
//                   reviewer: "Josh"
//                 },
//                 { 
//                   text: "You're so functional Vue.js",
//                   rating: 10,
//                   reviewer: "Jay"
//                 },
//                 { 
//                   text: "I miss Angular.js",
//                   rating: 3,
//                   reviewer: "Peter"
//                 }
//                 ],
//       newReviewText: '',
//       newReviewRating: '',
//       newReviewReviewer: ''
//     },
//     methods: {
//       addReview: function() {
//         if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewReviewer !== '') {
//           var reviewObj = {
//                            text: this.newReviewText,
//                            rating: this.newReviewRating,
//                            reviewer: this.newReviewReviewer
//                           };
//           this.reviews.push(reviewObj);
          
//           this.newReviewText = '';
//           this.newReviewRating = '';
//           this.newReviewReviewer = '';
//         }
//       },
//       isPositive: function(inputReview) {
//         return inputReview.indexOf('stupid') === -1;
//       }
//     }
//   });
// });
