import Home from "../component/Home";
import { addTocart } from "../services/Actions/Action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cardItem,
  // cardData: state.cardData,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addTocart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
