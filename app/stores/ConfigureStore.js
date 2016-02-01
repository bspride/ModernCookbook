import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStore(history) {
	const routerMiddleware = syncHistory(history)
	
	let middleware = compose(applyMiddleware(thunk, routerMiddleware), DevTools.instrument())
	
	const store = middleware(createStore)(rootReducer, {})
	
	routerMiddleware.listenForReplays(store)
	
  return store
}