import JSX, { BaseComponent, CustomElement, Properties, Events, LifeCycle } from '@nyaf/lib';
require('./collapse.scss');

const COLLAPSED = "collapsed";
const COLLAPSING = "collapsing";
const EXPANDING = "expanding";
const EXPANDED = "expanded";

@CustomElement('ui-collapse')
@Properties<CollapseProps>({
  className: "collapse-css-transition",
  style: {},
  excludeStateCSS: '',
  transition: '',
  elementType: '',
  collapseHeight: 0, // exclude from ...rest
  isOpen: false,

})
@Events(['init', 'change'])
export class Collapse extends BaseComponent<CollapseProps> {
  constructor() {
    super();
    this.state = {
      collapseState: this.props.isOpen ? EXPANDED : COLLAPSED,
      collapseStyle: {
        height: this.props.isOpen ? null : getCollapseHeight(this.props),
        visibility: this.props.isOpen ? null : getCollapseVisibility(this.props)
      },
      hasReversed: false
    }
  }
;
;
;
;
;
;

  // Detect a new collapse state from props.isOpen change
  static getDerivedStateFromProps(props, state) {
    const isOpen =
      state.collapseState === EXPANDED || state.collapseState === EXPANDING;

    if (!isOpen && props.isOpen) {
      return {
        hasReversed: state.collapseState === COLLAPSING,
        collapseState: EXPANDING
      };
    }
    if (isOpen && !props.isOpen) {
      return {
        hasReversed: state.collapseState === EXPANDING,
        collapseState: COLLAPSING
      };
    }

    return null;
  }

  async render() {
    const {
      className,
      excludeStateCSS,
      transition,
      style,
      elementType,
      collapseHeight, // exclude from ...rest
      isOpen,
      ...rest
    } = this.data;

    let computedStyle = {
      overflow: "hidden",
      transition
      //...style,
      //...this.state.collapseStyle
    };
    Object.assign(computedStyle, style);
    Object.assign(computedStyle, this.state.collapseStyle);

    const ElementType = elementType || "div";
    let collapseClassName = className;
    if (!excludeStateCSS)
      collapseClassName += ` -c-is--${this.state.collapseState}`;

    return (
      <ElementType
        ref={element => {
          this.content = element;
        }}
        style={computedStyle}
        className={collapseClassName}
        onTransitionEnd={this.onTransitionEnd}
        {...rest}
      >
        {typeof children === "function"
          ? children(this.state.collapseState)
          : typeof render === "function"
            ? render(this.state.collapseState)
            : children}
      </ElementType>
    );
  }

  lifeCycle(state: LifeCycle) {
    if (state === LifeCycle.Load) {
      this.onCallback(this.props.onInit);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.content) return;

    if (this.state.collapseState === prevState.collapseState) return;

    switch (this.state.collapseState) {
      case EXPANDING:
        this.setExpanding();
        break;
      case COLLAPSING:
        this.setCollapsing();
        break;
      case EXPANDED:
        this.setExpanded();
        break;
      case COLLAPSED:
        this.setCollapsed();
        break;
      // no default
    }
  }

  onTransitionEnd({ target, propertyName }) {
    if (target === this.content && propertyName === "height") {
      switch (this.state.collapseState) {
        case EXPANDING:
          if (target.style.height !== "0px")
            this.setState({ collapseState: EXPANDED });
          break;
        case COLLAPSING:
          if (target.style.height === "0px")
            this.setState({ collapseState: COLLAPSED });
          break;
        default:
      }
    }
  }
  getHeight() {
    return `${this.content.scrollHeight}px`;
  }

  onCallback(callback) {
    callback &&
      callback({
        ...this.state,
        isMoving: isMoving(this.state.collapseState)
      });
  }
  setCollapsed() {
    if (!this.content) return;

    this.setState(
      {
        collapseStyle: {
          height: getCollapseHeight(this.props),
          visibility: getCollapseVisibility(this.props)
        }
      },
      () => this.onCallback(this.props.onChange)
    );
  }
  setCollapsing() {
    if (!this.content) return;

    const height = this.getHeight();

    this.setState({
      collapseStyle: {
        height,
        visibility: ""
      }
    });

    nextFrame(() => {
      this.setState(
        {
          collapseStyle: {
            overflow: "hidden",
            height: getCollapseHeight(this.props),
            visibility: ""
          }
        },
        () => this.onCallback(this.props.onChange)
      );
    });
  }
  setExpanding() {
    nextFrame(() => {
      if (this.content) {
        const height = this.getHeight();

        this.setState(
          {
            collapseStyle: {
              overflow: "hidden",
              height,
              visibility: ""
            }
          },
          () => this.onCallback(this.props.onChange)
        );
      }
    });
  }
  setExpanded() {
    if (!this.content) return;

    this.setState(
      {
        collapseStyle: {
          height: "",
          visibility: "",
          overflow: "visible"
        }
      },
      () => this.onCallback(this.props.onChange)
    );
  }}

interface CollapseProps {
  className: "collapse-css-transition",
  style: {},
  excludeStateCSS: string;
  transition: string;
  elementType: string;
  collapseHeight: number;
  isOpen: boolean;
}

function nextFrame(callback) {
  // Ensure it is always visible on collapsing, afterFrame didn't work
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

function isMoving(collapseState) {
  return collapseState === EXPANDING || collapseState === COLLAPSING;
}

function getCollapseHeight(props) {
  return props.collapseHeight || "0px";
}

function getCollapseVisibility(props) {
  return props.collapseHeight ? "" : "hidden";
}
