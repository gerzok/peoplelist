import { connect } from 'react-redux';
import { PeopleListComp } from './peoplelist.component';
import { fetchPeopleList } from '../state/peopleListActions';
import { peopleListDataSelector } from '../state/peopleListSelectors';

const mapStateToProps = (state) => ({
  data: peopleListDataSelector(state),
});

const mapDispatchToProps = {
  fetchPeopleList,
};

export const PeopleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleListComp);