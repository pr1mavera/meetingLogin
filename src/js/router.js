function Router() {
  this.routes = {};
  this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function(){};
};
  Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
};
Router.prototype.init = function() {
  window.addEventListener('DOMContentLoaded', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
  document.getElementsByClassName('container')[0].style.display = "block";
}

export default new Router()
