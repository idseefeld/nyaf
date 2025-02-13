import JSX, { CustomElement, BaseComponent } from '@nyaf/lib';

import { tablePropsHeader } from '../Defs';

@CustomElement('guide-memorytable')
export class GuideMemoryTable extends BaseComponent<{}> {

  constructor() {
    super();
    this.drawCell = this.drawCell.bind(this);
  }

  drawCell(val, props) {
    if (props.name === 'name') {
      return <a href='#'>{val}</a>;
    }
    return val;
  }

  render() {
    const codeImport = `import {MemoryTable} from "@nyaf/ui";`;
    const codeUse = `
            <ui-memorytable
                className="table-border striped"
                source={'../data/table.json'}
                rowsTitle='Show: '
                onDrawCell={
                    (val, props, index) => index === 0 ? "<code>"+val+"</code>" : val
                }
                clsPagination='no-gap'
                clsEmptyTitle='text-center'
                />`;

    const tablePropsData = [
      ['scrollable', 'false', 'Enable horizontal scroll for wide table'],
      ['source', '...', 'Link to table data source'],
      ['pagination', 'true', 'Add pagination'],
      ['search', 'true', 'Add search feature'],
      ['rowsSteps', '[-1, 10, 20, 100]', 'Data for select, where shown how much rows will be displayed'],
      ['rows', '10', 'Init value for rowsSteps'],
      ['rowsTitle', 'null', 'Prepend for select for rowsSteps'],
      ['searchPlaceholder', 'Search...', 'Placeholder for search field'],
      ['searchFilter', 'null', 'Init search filter'],
      ['searchFilterLength', '1', 'Chars when filter fired'],
      ['searchFilterThreshold', '500', 'Milliseconds for filter fired after user stop typing'],
      ['clsSearchBlock', 'null', 'Additional class for search block'],
      ['clsSearch', 'null', 'Additional class for search input'],
      ['clsRows', 'null', 'Additional class for rows steps'],
      ['clsInfoBlock', 'null', 'Additional class for info block (pagination + info)'],
      ['clsPagination', 'null', 'Additional class for pagination'],
      ['clsPaginationBlock', 'null', 'Additional class for pagination block'],
      ['clsInfo', 'null', 'Additional class for table information block'],
      ['onHeadClick', '() => {}', 'Callback for table head cell click'],
      ['onCellClick', '() => {}', 'Callback for table body cell click'],
    ];

    return (
      <demo-article>
        <demo-guidelogo></demo-guidelogo>
        <h1>MemoryTable</h1>

        <br />

        <br />

        <h3>Introduction</h3>
        <p>
          <code>MemoryTable</code> - component that extends the capabilities of the standard Table component. It adds features such as: search, sorting, pagination.
                </p>
        <br />
        <demo-example>
          <ui-memorytable
            className='table-border striped'
            source={'../data/table.json'}
            rowsTitle='Show: '
            onDrawCell={this.drawCell}
            clsSearchBlock='row'
            clsSearch='cell-md-9'
            clsRows='cell-md-3'
            clsInfoBlock='row'
            clsInfo='cell-md-6 order-2 text-center'
            clsPaginationBlock='cell-md-6'
            clsPagination='no-gap'
            clsEmptyTitle='text-center'
          />
        </demo-example>

        <br />
        <h3>Importing</h3>
        <demo-prismcode language='js' code={codeImport} />

        <br />
        <h4>Props</h4>
        <p>
          Component <code>MemoryTable</code> has standard props as for <code>Table</code> component and an addition properties:
                </p>
        <ui-table className='table-border cell-border' body={tablePropsData} head={tablePropsHeader} />

        <br />
        <h3>Using</h3>
        <demo-prismcode language='js' code={codeUse} />


        <br />

        <br />
      </demo-article>
    );
  }
}
