export const UPDATE_CONVERSATION_CURRENT = 'UPDATE_CONVERSATION_CURRENT'
export const ADD_CONVERSATIONS = 'ADD_CONVERSATIONS'
export const UPDATE_CONVERSATIONS = 'UPDATE_CONVERSATIONS'

export interface UpdateConversationCurrentAction {
  type: typeof UPDATE_CONVERSATION_CURRENT,
  payload: number
}

export interface AddConversationsAction {
  type: typeof ADD_CONVERSATIONS,
  payload: Message
}

export interface UpdateConversationsAction {
  type: typeof UPDATE_CONVERSATIONS,
  payload: Message
}


export type ConversationAction = UpdateConversationCurrentAction | AddConversationsAction | UpdateConversationsAction