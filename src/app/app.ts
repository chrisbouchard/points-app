import {Component, View} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
  selector: 'fate-app'
})
@View({
  directives: [AppFrame, RouterOutlet],
  template: require('./app.html.haml')
})
@RouteConfig([
])
export class App {}

