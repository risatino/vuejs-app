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
        this.reviews.push(this.newReview);
      },
      addTask: function() {
        this.tasks.push(this.newTask);
      }
    }
  });
});
