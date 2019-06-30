
export default {

  namespace: 'example',

  state: {},
//订阅data源
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//处理异步逻辑（效果）
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
