import * as types from './types'

export function updateCurrent(current: number): types.UpdateConversationCurrentAction {
  return {
    type: types.UPDATE_CONVERSATION_CURRENT,
    payload: current
  }
}

export function addConversations(msg:Message): types.AddConversationsAction {
  return {
    type: types.ADD_CONVERSATIONS,
    payload: msg
  }
}

export function updateConversations(msg:Message): types.UpdateConversationsAction {
  return {
    type: types.UPDATE_CONVERSATIONS,
    payload: msg
  }
}