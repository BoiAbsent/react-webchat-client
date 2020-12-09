declare interface User {
  id?: number,
  name?: string,
  avator?: string
}

declare interface Global {
  socket: SocketIOClient.Socket | void
}

declare interface Message {
  id: number,
  to_id: number,
  from_id: number,
  content: string,
  create_date: number
}

declare interface ConversationMap {
  [propName: string]: Message[]
}


declare interface ConversationList {
  current: number | void,
  list: ConversationMap
}

declare interface StoreState {
  user:User,
  global:Global,
  conversationList:ConversationList
}