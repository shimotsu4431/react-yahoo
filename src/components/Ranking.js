import React from 'react'
import PropTypes from 'prop-types'

export default function Ranking({ categoryId }) {
  return (
    <div>
      <h2>ランキングコンポーネント</h2>
      {/* propsからの情報を表示する */}
      <p>カテゴリーID: {categoryId}</p>
    </div>
  )
}

Ranking.propTypes = {
  categoryId: PropTypes.string
}

Ranking.defaultProps = {
  // '1'は総合ランキング
  // propsがなにもないとき用
  categoryId: '1'
}