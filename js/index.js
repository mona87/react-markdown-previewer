'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    // default text

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      value: '\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n'
    };
    return _this;
  }

  App.prototype.handleChange = function handleChange(e) {
    // update state with new value
    this.setState({ value: e.target.value });
  };

  App.prototype.markUp = function markUp(val) {
    // convert text to markup and return val
    var rawMarkup = marked(val, { sanitize: true });
    return rawMarkup;
  };

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { style: { textAlign: 'center' } },
        'React Markdown Previewer'
      ),
      React.createElement(
        'div',
        { style: { display: 'flex' } },
        React.createElement('textarea', {
          style: { width: "500px", height: '500px' },
          rows: '22',
          type: 'text',
          value: this.state.value,
          onChange: this.handleChange.bind(this)
        }),
        React.createElement('span', {
          style: { marginLeft: '40px' },
          dangerouslySetInnerHTML: { __html: this.markUp(this.state.value) }
        })
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));