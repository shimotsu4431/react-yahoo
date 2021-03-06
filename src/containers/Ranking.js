import { connect } from 'react-redux'
import Ranking from '../components/Ranking'
import * as actions from '../actions/Ranking'

const mapStateToProps = (state, ownProps) => ({
  category: state.Ranking.category,
  ranking: state.Ranking.ranking,
  error: state.Ranking.error
})

// onMount時／onUpdate時それぞれでランキングをフェッチする関数をPropsに渡す
const mapDispatchToProps = dispatch => ({
  onMount(categoryId) {
    dispatch(actions.fetchRanking(categoryId))
  },
  onUpdate(categoryId) {
    dispatch(actions.fetchRanking(categoryId))
  }
})

// これによってRankingコンポーネントに値や関数が渡される
export default connect(mapStateToProps, mapDispatchToProps)(Ranking)