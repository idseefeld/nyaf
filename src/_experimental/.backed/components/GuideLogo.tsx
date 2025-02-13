import JSX, { CustomElement, BaseComponent } from '@nyaf/lib';

import LogoSocial from '../../images/logo-social.png';

@CustomElement('demo-guidelogo')
export class GuideLogo extends BaseComponent<any> {

  constructor() {
    super();
  }

  async render() {
    return await (<div className='guide-logo-wrapper'><img src={LogoSocial} alt='' className='guide-logo' /></div>);
  }

}
