import { connect } from 'react-redux';
import { StateT } from '../../../reducer';
import { openMenu, closeMenu } from '../../../actions';
import MenuBar from './MenuBar';

const mapStateToProps = (state: StateT) => ({
  open: state.menuOpen
});

const mapDispatchToProps = { openMenu, closeMenu };

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
