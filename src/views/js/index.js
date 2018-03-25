import $ from 'jquery';

var navList = document.getElementsByClassName('navItem');
var navIndex = document.getElementsByClassName('navIndex');
var viewList = document.getElementsByClassName('routerView');

function changeView(dom, className) {
  for (var i = 0; i < dom.length; i++) {
    $(dom[i]).addClass('displayNone');
    if ($(dom[i]).hasClass(className)) {
      $(dom[i]).removeClass('displayNone');
    }
  }
}

function changeNav(nav, className) {
  for (var i = 0; i < nav.length; i++) {
    $(nav[i]).removeClass('isChecked');
    $(nav[i]).addClass('displayNone');
    if ($(nav[i]).hasClass(className)) {
      $(nav[i]).addClass('isChecked');
    }
  }
  if (className == 'login' || className == 'register') {
    $(nav[0]).removeClass('displayNone');
    $(nav[1]).removeClass('displayNone');
    $(navIndex).removeClass('displayNone');
    if (className == 'register') {
      $(navIndex).addClass('navIndexMove');
    } else {
      $(navIndex).removeClass('navIndexMove');
    }
  } else if (className == 'resetPW') {
    $(nav[2]).removeClass('displayNone');
    $(navIndex).addClass('displayNone');
  } else {
    $(nav[3]).removeClass('displayNone');
    $(navIndex).addClass('displayNone');
  }
}

Router.route('/', function() {
  changeView(viewList, 'login');
  changeNav(navList, 'login');
});
Router.route('/register', function() {
  changeView(viewList, 'register');
  changeNav(navList, 'register');
});
Router.route('/resetPW', function() {
  changeView(viewList, 'resetPW');
  changeNav(navList, 'resetPW');
});
Router.route('/weixin', function() {
  changeView(viewList, 'weixin');
  changeNav(navList, 'weixin');
});
