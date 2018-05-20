"use strict";
var loadButton = document.getElementById('load-more');
      var feed = new Instafeed({
         after: function() {
           if (!this.hasNext()) {
             loadButton.setAttribute('disabled', 'disabled');
        }
      },
    });
  loadButton.addEventListener('click', function() {
    userFeed.next();
  }); 
 userFeed.run();