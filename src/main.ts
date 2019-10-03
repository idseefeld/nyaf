import { GlobalProvider, Routes } from '@nyaf/lib';

import { MainComponent } from './components/test/main.component';
import { TabsComponent } from './components/test/tabs.component';
import { TabComponent } from './components/test/tab.component';
import { ButtonComponent } from './components/test/button.component';
import { AboutComponent } from './components/test/pages/about.component';
import { DemoComponent } from './components/test/pages/demo.component';
import { ContactComponent } from './components/test/pages/contact.component';
import { CounterComponent } from 'components/test/counter.component';
import { StoreCounterComponent } from './components/test/storecounter.component';
import { HomeComponent } from 'components/test/pages/home.component';
import { DocuComponent } from 'components/test/pages/docu.component';
import { ButtonsComponent } from 'components/test/buttons.component';
import { FormComponent } from 'components/test/form.component';
import { RouterComponent } from 'components/test/router/router.component';
import { Page1Component } from 'components/test/router/page1.component';
import { Page2Component } from 'components/test/router/page2.component';
import { Page3Component } from 'components/test/router/page3.component';

import './main.scss';

const routes: Routes = {
  '/': { component: HomeComponent },
  '/docu': { component: DocuComponent },
  '/about': { component: AboutComponent },
  '/demo': { component: DemoComponent },
  '/router': { component: RouterComponent },
  '/router/page1': { component: Page1Component, outlet: 'router' },
  '/router/page2': { component: Page2Component, outlet: 'router' },
  '/router/page2/other': { component: Page2Component, outlet: 'other' },
  '/router/page3/other': { component: Page3Component, outlet: 'other' },
  '/contact': { component: ContactComponent }
};

GlobalProvider.bootstrap({
  // register all components directly used in templates
  components: [
    MainComponent,
    ButtonComponent,
    ButtonsComponent,
    TabComponent,
    TabsComponent,
    ContactComponent,
    AboutComponent,
    DemoComponent,
    CounterComponent,
    StoreCounterComponent,
    HomeComponent,
    DocuComponent,
    FormComponent,
    RouterComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  // register for router
  routes: routes
});
