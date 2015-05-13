import {Component, View, bootstrap} from 'angular2/angular2';
import {ComponentAnnotation as Component, ViewAnnotation as View}

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>My first Angular 2 App</h1>'
})
class AppComponent {
}

bootstrap(AppComponent);