import JSX, { CustomElement, BaseComponent } from '@nyaf/lib';

import { tablePropsHeader } from '../Defs';

@CustomElement('guide-grid')
export class GuideGrid extends BaseComponent<{}> {

  constructor() {
    super();
  }

  async render() {
    const codeImport = `import {Grid, Row, Cell} from "@nyaf/ui;"`;
    const codeUseGrid = `<ui-grid>...</ui-grid>`;
    const codeUseRow = `
            <ui-grid>
                <ui-row>...</ui-row>
                ...
                <ui-row>...</ui-row>
            </ui-grid>
        `;
    const codeUseRowStandalone = `
            <ui-row>...</ui-row>
            ...
            <ui-row>...</ui-row>
        `;
    const codeUseCell = `
            <ui-row>
                <ui-cell>...</ui-cell>
                ...
                <ui-cell>...</ui-cell>
            </ui-row>
        `;
    const codeUseCellClass = `
            <ui-row>
                <ui-cell cls="cell-md-6">...</ui-cell>
                <ui-cell cls="cell-md-2">...</ui-cell>
                <ui-cell cls="cell-md-2">...</ui-cell>
            </ui-row>
        `;
    const codeUseCellResponsive = `<ui-cell cls="cell-md-6">...</ui-cell>`;

    return (
      <demo-article>
        <demo-guidelogo></demo-guidelogo>
        <h1>Grid</h1>

        <p className={'text-leader2'}>
          Use our powerful mobile-first flex-box grid to build layouts of all shapes and sizes thanks to a twelve column system and siz default responsive tiers.
                </p>

        <br />

        <br />

        <h3>Introduction</h3>
        <p>
          Metro 4 grid system uses a series of <code>containers</code>, <code>rows</code>, and <code>columns</code> to layout and align content.
                </p>
        <ui-table className='table-border cell-border' >
          <tbody>
            <tr>
              <td>Containers</td>
              <td><code>Grid</code></td>
            </tr>
            <tr>
              <td>Rows</td>
              <td><code>Row</code></td>
            </tr>
            <tr>
              <td>Columns</td>
              <td><code>Cell</code></td>
            </tr>
          </tbody>
        </ui-table>

        <br />
        <h3>Importing</h3>
        <demo-prismcode language='js' code={codeImport} />

        <br />
        <h4>Grid</h4>
        <demo-prismcode language='jsx' code={codeUseGrid} />

        <h5>Props</h5>
        <ui-table className='table-border cell-border' head={tablePropsHeader}>
          <tbody>
            <tr>
              <td><code>as</code></td>
              <td><code>div</code></td>
              <td>Semantic Element</td>
            </tr>
            <tr>
              <td><code>cls</code>, <code>className</code></td>
              <td></td>
              <td>Element classes</td>
            </tr>
          </tbody>
        </ui-table>

        <br />
        <h4>Row</h4>
        <demo-prismcode language='jsx' code={codeUseRow} />
        <p>
          You can use <code>Row</code> without a <code>Grid</code> element.
                </p>
        <demo-prismcode language='jsx' code={codeUseRowStandalone} />

        <h5>Props</h5>
        <ui-table className='table-border cell-border' head={tablePropsHeader}>
          <tbody>
            <tr>
              <td><code>as</code></td>
              <td><code>div</code></td>
              <td>Semantic Element</td>
            </tr>
            <tr>
              <td><code>cls</code>, <code>className</code></td>
              <td></td>
              <td>Element classes</td>
            </tr>
          </tbody>
        </ui-table>

        <br />
        <h4>Cell</h4>
        <demo-prismcode language='jsx' code={codeUseCell} />

        <h5>Props</h5>
        <ui-table className='table-border cell-border' head={tablePropsHeader}>
          <tbody>
            <tr>
              <td><code>as</code></td>
              <td><code>div</code></td>
              <td>Semantic Element</td>
            </tr>
            <tr>
              <td><code>cls</code>, <code>className</code></td>
              <td></td>
              <td>Element classes</td>
            </tr>
          </tbody>
        </ui-table>
        <p className='remark info'>
          Each cell has default <code>padding: 6px</code>. To remove all padding use class <code>.no-gap</code> for <code>Grid</code> or <code>Row</code>.
                </p>


        <br />
        <h3>Responsive tiers</h3>
        <p>
          You can use responsive modification classes to create responsive, mobile-first grid system.
            These class named as <code>cell-[mobile-point]-[span]</code>, where <b>mobile-point</b> one of:
            <code>fs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> and <code>xxl</code>, and <b>span</b> -
            how much cell spans on this media point.
        </p>

        <p className='remark info'>
          Also, you can use alias <code>col-[mobile-point]-[span]</code>. This alias is specifically introduced for Bootstrap users.
                </p>

        <p>
          In example below, cell will use one column when width less then <code>768px</code>, and six columns when width more or equal <code>768px</code>.
                </p>

        <demo-prismcode language='jsx' code={codeUseCellResponsive} />

        <p>
          You can combine classes to build responsive grid with 12 columns total.
                </p>

        <demo-prismcode language='jsx' code={codeUseCellClass} />

        <ui-table className='table-border cell-border'>
          <tbody>
            <tr>
              <td><b>fs</b></td>
              <td><code>min-width 0px</code></td>
            </tr>
            <tr>
              <td><b>sm</b></td>
              <td><code>min-width 576px</code></td>
            </tr>
            <tr>
              <td><b>md</b></td>
              <td><code>min-width 768px</code></td>
            </tr>
            <tr>
              <td><b>lg</b></td>
              <td><code>min-width 992px</code></td>
            </tr>
            <tr>
              <td><b>xl</b></td>
              <td><code>min-width 1200px</code></td>
            </tr>
            <tr>
              <td><b>xxl</b></td>
              <td><code>min-width 1452px</code></td>
            </tr>
          </tbody>
        </ui-table>

        <br />

        <br />

      </demo-article>
    );
  }
}
