import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class PageSection extends Component {
    render() {
        return this.props.content
    }
}

PageSection.propTypes = {
    content: PropTypes.node.isRequired
}

export default PageSection;