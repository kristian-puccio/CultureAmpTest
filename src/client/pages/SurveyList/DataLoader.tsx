import * as React from "react";
import { connect } from "react-redux";
import { MyDispatch } from "../../actions";
import { StoreState } from "../../reducers";
import { fetchSurveysList } from "../../actions/surveys";
import * as selectors from "../../reducers/selectors";

interface IncomingProps {
  children: RenderCallback;
}

interface CallbackProps {
  surveys: ReadonlyArray<selectors.Survey>;
}

type RenderCallback = (props: CallbackProps) => React.ReactNode;

type Props = IncomingProps & StateProps & DispatchProps;

class DataLoader extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { children, isFetching, surveys } = this.props;

    // TODO: make a component
    if (isFetching || !surveys) {
      return <div>Loading</div>;
    }

    return children({ surveys });
  }
}

interface StateProps {
  isFetching: boolean;
  surveys: ReadonlyArray<selectors.Survey> | null;
}
const mapStateToProps = (state: StoreState): StateProps => ({
  isFetching: selectors.getSurveyListIsFetching(state),
  surveys: selectors.getSurveyList(state),
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
