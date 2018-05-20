"use strict";
var userFeed = new Instafeed({
        get: 'user',
        userId: 7615285769,
        accessToken: '7615285769.13f3ff1.891d542fb459419c808a2b5a51a6296c',
        links: true,
        limit: 5,
        resolution: 'low_resolution',
        template: '<div class="photo"><a href="{{image}}"><div class="img-container"><div class="img-backdrop"><img src="{{image}}" class="img-responsive"></div><div class="description-container"><p class="caption">{{caption}}</p> <span class="likes"><i class="icon ion-heart">&#9829; </i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble">&#9998; </i>{{comments}}</span></div></div></a></div>',
      });
    userFeed.run();