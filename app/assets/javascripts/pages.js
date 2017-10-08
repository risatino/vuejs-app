document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Pink Martians!',
      reviews: [
                "How was your trip to planet Earthe?",
                "I miss Rails.",
                "Have you heard the latest Django Reinhardt jamz?"
                ],
      newReview: '',
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
        if (this.newReview != '') { 
          this.reviews.push(this.newReview);
          this.newReview = '';
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
    }
  });
});
