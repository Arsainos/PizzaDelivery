import { Component } from 'react';
import PropTypes from 'prop-types';

class PageSection extends Component {
    render() {
        return this.props.content
    }
}

PageSection.propTypes = {
    content: PropTypes.node.isRequired
}

export default PageSection;