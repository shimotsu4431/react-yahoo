import React from 'react'
import PropTypes from 'prop-types'

export default class Ranking extends React.Component {
  // コンポーネントがマウントされる直前
  componentWillMount() {
    this.props.onMount(this.props.categoryId)
  }

  // コンポーネントがpropsを受け取る直前
  // 次に受け取るcategoryIdと比較し処理する
  componentWillReceiveProps(nextProps) {
    if(this.props.categoryId !== nextProps.categoryId) {
      // 違うcategoryIdが渡ってきたら、書き換える
      this.props.onUpdate(nextProps.categoryId)
    }
  }

  render(){
    return (
      <div>
        <h2>ランキングコンポーネント</h2>
        {/* propsからの情報を表示する */}
        <p>カテゴリーID: {this.props.categoryId}</p>
      </div>
    )
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

Ranking.defaultProps = {
  // '1'は総合ランキング
  // propsがなにもないとき用
  categoryId: '1'
}