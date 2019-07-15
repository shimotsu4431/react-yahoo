import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'
import { replace } from 'react-router-redux'

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'
const APP_ID = 'dj00aiZpPWxUNEJJR05EZmhociZzPWNvbnN1bWVyc2VjcmV0Jng9N2Y-'

// リクエスト開始
const startRequest = category => ({
  type: 'START_REQUEST',
  payload: { category }
})

// レスポンス受信
const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { category, error, response}
})

// リクエスト完了
const finishRequest = category => ({
  type: 'FINISH_REQUEST',
  payload: { category }
})

// ランキングを取得する
export const fetchRanking = categoryId => {
  return async (dispatch, getState) => {

    // getState()で、jsonを返すshopping.jsの`cate`からカテゴリを取得してる → 変数categoriesに代入
    const categories = getState().shopping.cate

    // categoriesから、json内のidと、categoryId={match.params.id}と一致するものを探し、categoryに格納
    const category = categories.find(category => (category.id === categoryId))
    console.log(category)
    // {id: "10002", name: "本、雑誌、コミック"}

    if(typeof category === 'undefined') {
      dispatch(replace('/'))
      return
    }

    // ここでやっとリクエスト開始
    dispatch(startRequest(category))

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId
    })

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`)
      const data = await response.json()
      dispatch(receiveData(category, null ,data))
    } catch(err) {
      dispatch(receiveData(category, err))
    }
    dispatch(finishRequest(category))
  }
}