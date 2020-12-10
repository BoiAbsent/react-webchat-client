import * as types from './types'

export default function ConversationListReducer(state:ConversationStore = {
  current: 101,
  map: {
    '101': {
      mate_id: 101,
      mate_name: '101号',
      mate_avator: '',
      last_msg: '我是101号',
      last_timestamp: 1607650014754,
      unread: 0 ,
      messages: [{
        id: 1607650014754,
        to_id: 1,
        from_id: 101,
        content: '我是101号',
        create_date: 1607650014754,
      }]
    },
    '102': {
      mate_id: 102,
      mate_name: '102号',
      mate_avator: '',
      last_msg: '我是102号',
      last_timestamp: 1607650014754,
      unread: 0 ,
      messages: [{
        id: 1607650014754,
        to_id: 1,
        from_id: 102,
        content: '我是102号',
        create_date: 1607650014754,
      }]
    }
  }
}, action:types.ConversationAction):ConversationStore {
  switch (action.type) {
    case types.UPDATE_CONVERSATION_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case types.ADD_CONVERSATIONS:
      return {
        current: state.current && action.payload.from_id,
        map: {
          ...state.map,
          [String(action.payload.from_id)]: {
            mate_id: action.payload.from_id,
            mate_name: '',
            mate_avator: '',
            last_msg: action.payload.content,
            last_timestamp: action.payload.create_date,
            unread: state.current ? 1 : 0 ,
            messages: [action.payload]
          }
        }
      }
    case  types.UPDATE_CONVERSATIONS:
      return {
        current: state.current,
        map: {
          ...state.map,
          [String(action.payload.from_id)]: {
            ...state.map[String(action.payload.from_id)],
            last_msg: action.payload.content,
            last_timestamp: action.payload.create_date,
            unread: state.current ? 1 : 0 ,
            messages: [
              ...state.map[String(action.payload.from_id)].messages,
              action.payload
            ]
          }
        }
      }
    default:
      return state
  }
}