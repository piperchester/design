const React = require('react');
const PropTypes = require('prop-types');
const Prism = require('prismjs');
require('prismjs/components/prism-jsx');
import 'prismjs/themes/prism.css';
import '../../css/site/mongodb-prism.less';


class Code extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return( 
      <pre>
        <code className={this.props.language}>
          {this.props.text}
        </code>
      </pre>
    );
  }
}

Code.propTypes = {
  text: PropTypes.string,
  language: PropTypes.string
};

export default Code;
