import { connect } from 'react-redux'
import Navigation from '../components/Nav'

const mapStateToProps = state => ({
  categories: state.shopping.cate
})

// Navigationコンポーネントにcatgoriesが渡される
export default connect(mapStateToProps)(Navigation)