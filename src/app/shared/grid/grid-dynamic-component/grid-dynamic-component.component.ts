import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input } from '@angular/core';
import { CostComponent } from './components/cost/cost.component';
import { TextComponent } from './components/text/text.component';
import { ContractTermComponent } from './components/contract-term/contract-term.component';
import { DynamicComponent } from './components/DynamicComponent';

@Component({
  selector: 'grid-dynamic-component',
  template: '<div #container></div>',
})
export class GridDynamicComponentComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef
  @Input() type: string;
  @Input() data: any;

  private componentsMapping = {
    'cost': CostComponent,
    'text': TextComponent,
    'contractTerm': ContractTermComponent
  };

  componentRef: ComponentRef<{}>;

  constructor(private resolveFactory: ComponentFactoryResolver) { }
  ngOnInit() {

    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.resolveFactory.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory)

      let instance = <DynamicComponent>this.componentRef.instance;
      instance.data = this.data;
    }

    let instance = this.componentRef.instance;
  }

  getComponentType(typeName: string) {
    let type = this.componentsMapping[typeName];
    return type || '';
  }
}
