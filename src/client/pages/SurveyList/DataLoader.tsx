import * as React from "react";
import { connect } from "react-redux";
import { MyDispatch } from "../../actions";
import { fetchSurveysList } from "../../actions/surveys";

interface IncomingProps {
  children: RenderCallback;
}

type RenderCallback = (data: Object) => JSX.Element;

type Props = IncomingProps & StateProps & DispatchProps;

class DataLoader extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { children } = this.props;
    const data = { thing: true };
    return children(data);
  }
}

interface StateProps {
  isFetching: boolean;
}
const mapStateToProps = (): StateProps => ({
  isFetching: false,
});

interface DispatchProps {
  fetchData: () => void;
}
const mapDispatchToProps = (dispatch: MyDispatch): DispatchProps => ({
  fetchData() {
    dispatch(fetchSurveysList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader);
