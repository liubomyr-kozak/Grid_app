import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input } from '@angular/core';
import { CostComponent } from './components/cost/cost.component';



@Component({
  selector: 'grid-dynamic-component',
  template: '<div #container></div>',
})
export class GridDynamicComponentComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef
  @Input() type: string;

  private componentsMapping = {
    'cost': CostComponent
  };

  componentRef: ComponentRef<{}>;

  constructor(private resolveFactory: ComponentFactoryResolver) { }
  ngOnInit() {

    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.resolveFactory.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory)
    }
    
    let instance = this.componentRef.instance;
  }

  getComponentType(typeName: string) {
    let type = this.componentsMapping[typeName];
    return type || '';
  }
}
