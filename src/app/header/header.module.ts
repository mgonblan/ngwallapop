import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import { HeaderComponent } from './header.component';
import { UIShellModule, IconModule, ButtonModule, IconService } from 'carbon-components-angular';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UIShellModule,
    IconModule,
    ButtonModule
  ]
})
export class HeaderModule {
  /**
   * Inject Icon service into module constructor or even component,
   * it's better to register these modules early instead of later.
   *
   * It's recommended to use module constructor for most cases
   *
   * If needed, you can even create a shared module & register ALL needed icons. IconService is a singleton,
   * so registered icons will be available once you import the shared icon module.
   */
  constructor(private iconService: IconService) {
    this.iconService.registerAll([
      Notification20,
      UserAvatar20,
      AppSwitcher20
    ]);
  }
 }
