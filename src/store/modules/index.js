// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐

import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';

// 다른 reducer가 있으면 아래 코드에 추가해 주면 됨
export default combineReducers({
    counter, todo
});
