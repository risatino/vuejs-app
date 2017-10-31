### About Vue.js App:

* git clone vuejs/vue-devtools
* set up rails & vue with vue development chrome extension

### Getting Started (Integrating Vue.js w/ Rails)

1. install gems:
```gem 'vuejs-rails'```
```gem 'jquery-rails'```

2. bundle

3. Add ```//= require vue``` to your application.js file (i.e. app/assets/javascripts/application.js) on the line before //= require_tree .

4. Create this file: 
```config/initializers/vue_config.rb```

5. Add ```Vue.development_mode = true``` to the *vue_config.rb* file
(Set this to false if you are pushing to production) Then run ```rake tmp:cache:clear``` in the terminal after changing this development_mode flag

6. Add the following javascript to one of the javascript files in the *app/assets/javascripts* folder.

* Friendly note: If you have a .coffee file and a .js file with the same name in *app/assets/javascripts*, then Rails will only load the .coffee file!  For this reason it’s best to delete the .coffee file just in case.

```document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });
});```

7. Add to your HTML:

```<div id="app">
  {{ message }}
</div>```

8. Go to that page in your browser and check that you see “Hello Vue!”. If so, Vue.js is properly installed!

