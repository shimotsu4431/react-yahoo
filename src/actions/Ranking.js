import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'
const APP_ID = 'dj00aiZpPWxUNEJJR05EZmhociZzPWNvbnN1bWVyc2VjcmV0Jng9N2Y-'

// リクエスト開始
const startRequest = categoryId => ({
  type: 'START_REQUEST',
  payload: { categoryId }
})

// レスポンス受信
const receiveData = (categoryId, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { categoryId, error, response}
})

// リクエスト完了
const finishRequest = categoryId => ({
  type: 'FINISH_REQUEST',
  payload: { categoryId }
})

// ランキングを取得する
export const fetchRanking = categoryId => {
  // ここでredux-thunkを使った非同期処理
  return async dispatch => {
    dispatch(startRequest(categoryId))

    const queryString = qs.stringify({
      appid: APP_ID,
      category_Id: categoryId
    })

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`)
      const data = await response.json()
      dispatch(receiveData(categoryId, null, data))
    } catch(err) {
      dispatch(receiveData(categoryId,err))
    } 
    dispatch(finishRequest(categoryId))
  }
}