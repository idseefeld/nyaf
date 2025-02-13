import JSX, { CustomElement, BaseComponent } from '@nyaf/lib';

import { tablePropsHeader } from '../Defs';

@CustomElement('guide-commandbutton')
export class GuideCommandButton extends BaseComponent<{}> {

  constructor() {
    super();
  }

  async render() {
    const codeImport = `import {CommandButton} from "@nyaf/ui";`;
    const codeUsing = `
            <ui-commandbutton
                icon="share"
                title="Yes, share and connect"
                subtitle="Use this option for home or work"/>`;

    const codeUsing2 = `
            <ui-commandbutton as={'a'}
                icon="share"
                title="Yes, share and connect"
                subtitle="Use this option for home or work"
                cls="icon-right info fg-white"/>`;

    return await (
      <demo-article>
        <demo-guidelogo></demo-guidelogo>
        <h1>Command button</h1>

        <p className={'text-leader2'}>
          With the Metro 4 you can easily create different types of stylized windows command buttons.
                </p>

        <br />

        <br />

        <h3>Introduction</h3>
        <div className='example'>
          <ui-commandbutton icon='share' title='Yes, share and connect' subtitle='Use this option for home or work' />
    &nbsp;<ui-commandbutton as={'a'} icon='share' title='Yes, share and connect' subtitle='Use this option for home or work' cls='icon-right info fg-white' />
        </div>

        <br />
        <h3>Importing</h3>
        <demo-prismcode language='js' code={codeImport} />

        <br />
        <h4>Props</h4>
        <ui-table className='table-border cell-border' head={tablePropsHeader}>
          <tbody>
            <tr>
              <td><code>as</code></td>
              <td><code>button</code></td>
              <td>Semantic element</td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td></td>
              <td>Button title</td>
            </tr>
            <tr>
              <td><code>subtitle</code></td>
              <td></td>
              <td>Button subtitle</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td></td>
              <td>Button icon</td>
            </tr>
            <tr>
              <td><code>iconPrefix</code></td>
              <td><code>mif-</code></td>
              <td>Button icon prefix (example: for Font Awesome prefix is <code>fa fa-</code>)</td>
            </tr>
            <tr>
              <td><code>image</code></td>
              <td></td>
              <td>Button image source</td>
            </tr>
            <tr>
              <td><code>cls</code>, <code>className</code></td>
              <td></td>
              <td>Button classes</td>
            </tr>
            <tr>
              <td><code>clsTitle</code></td>
              <td></td>
              <td>Class for title and subtitle</td>
            </tr>
            <tr>
              <td><code>clsSubtitle</code></td>
              <td></td>
              <td>Class for subtitle only</td>
            </tr>
            <tr>
              <td><code>clsIcon</code></td>
              <td></td>
              <td>Class for button icon or image</td>
            </tr>
          </tbody>
        </ui-table>

        <br />
        <h3>Using</h3>
        <demo-prismcode language='js' code={codeUsing} />
        <demo-prismcode language='js' code={codeUsing2} />


        <br />

        <br />
      </demo-article>
    );
  }
}
