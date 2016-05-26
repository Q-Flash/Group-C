angular.module('App.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
   id: 1,
    name: 'CSS App Workshop',
    lastText: 'Join us at the CSS workshop and embark on your future, build a killer app and win tones of great prizes.This is what you have been waiting for!',
    face: 'img/appw.jpg',
    Location:'UWI Cave Hill Campus, Barbados',
    Date:' Mon May 23, 2016 9:00pm',
    points:'13.1345697,-59.6319762'
  }, {
   id: 2,
    name: 'Day 2',
    eventDetails: 'Day 2 will be the ultimate cropover experience! Early bird tickets avaible from all box offices from 9am - 4pm. Happy hour from 10pm - 11pm Premium drinks half price until 12am.  ',
    face: 'img/web6.jpg',
    Location:'Kensington Oval',
    Date:' Aug 2, 2016 11:00pm',
    points:'13.1050324,-59.6244109'

  }, {
    id: 3,
    name: 'Jalapeno Sunrise',
    eventDetails:'Jalapeno Sunrise will be the ultimate party experience! Early bird tickets avaible from all box offices from 9am - 4pm .Black Bottles?? we got that son!!! We gonna light them up on board Jalapeño Sunrise! One of our partners for this epic boatride. Buy ticket online at www.bajantube.com/boatride or grab physical tickets at Brooklyn’s Finest, Bridgetown.',
    face: 'img/web1.jpg',
    Location:'Black Woods Screw Dock',
    Date:' Sun Jul 15, 2016 10:00pm',
    point:'3.0952803,-59.6161102'
  }, {
     id: 4,
    name: 'Avenue Episode 2 the Wave',
    eventDetails: 'kevindspsRebel Mogul Presents Avenue Episode 2, Yall been asking for it and we just had to deliver. Episode 1 was lit. Episode 2 will be bigger.A night to remember as the hip hop game comes alive. #vibe #barbados #covebarbados #saturdaynight @outtaboxent @rebelmogul #doubletap #goodtimes',
    face: 'img/Event2.jpg',
    Location:'The Cove St.Lawrence Gap',
    Date:' Sat May 30, 2016 11:00pm',
    point:'13.0675259,-59.5751565'
  }, {
    id: 5,
    name: 'Lights Out',
    eventDetails: 'CELEBRATE YOUR BDAY! Hookah | Drink Specials Bottle Specials For tix, info, bdays, or tables. #dellwaytravel #1stsaturdays #stage48 #lightsoutdayparty ',
    face: 'img/web5.jpg',
    Location:'Jolly Roger - Black Pearl Party Cruises',
    Date:' Fri Jun 9, 2016 10:00pm',
    points:'13.0961033,-59.6193974'
  }, {
    id: 6,
    name: 'Colorz',
    eventDetails: 'Come celebrate Independence with us and party till the sum comes up. The biggest Djs will be spinning tracks all night. Premium drinks available all night long. Miss this and blame yourself.',
    face: 'img/web4.jpg',
    Location:'Jolly Roger - Black Pearl Party Cruises',
    Date:' Sun Nov 27, 2016 11:00pm',
    points: '13.0961033,-59.6193974'
  }];


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
