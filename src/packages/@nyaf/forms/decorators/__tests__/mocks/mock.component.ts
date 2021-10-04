import { ViewModel } from '../../viewmodel.decorator';
import { BaseComponent } from '@nyaf/lib';
import { MockModel } from './mock.model';

@ViewModel<MockModel>(MockModel)
export class MockComponent extends BaseComponent {
  constructor() {
    super();
  }
  render(): string {
    return '<h1>Test</h1>';
  }
}
