import Header from "../component/Header";
import { addTocart } from "../services/Actions/Action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cardItem,
  // cardData: state.cardData,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
