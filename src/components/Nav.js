import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// containerの`export default connect(mapStateToProps)(Navigation)`の記述によって、
// categoriesがここに渡ってきている

// categoriesを受け取る
export default function Nav({ categories }) {
  
  console.log(categories)
  // 0: {id: "1", name: "すべてのカテゴリ"}
  // 1: {id: "2502", name: "パソコン、周辺機器"}
  // 2: {id: "10002", name: "本、雑誌、コミック"}

  const to = category => (
    category.id === '1'
    ? '/all'
    : `/category/${category.id}`
  )

  let i = 1

  return (
    <ul>
      {categories.map(category => (
        <li key={`nav-item-${category.id}`} data-id={i++}>
          <Link to={to(category)}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}