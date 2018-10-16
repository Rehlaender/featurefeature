import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Writer from '../components/Writer';
import * as ParagraphsActions from '../actions/paragraphs';

function mapStateToProps(state) {
  return {
    paragraphs: state.paragraphs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ParagraphsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer);