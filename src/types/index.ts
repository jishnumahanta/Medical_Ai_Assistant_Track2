import OpenAI from 'openai'
import type { Ref } from 'vue'

export type ChatHistoryItem = OpenAI.Chat.ChatCompletionMessageParam

export interface AppState {
  editBox: Ref<number[]>
  userName: Ref<string>
  message: Ref<string>
  messageType: Ref<string>
  isLoading: Ref<boolean>
  isMessage: Ref<boolean>
  isModal: Ref<boolean>
  jwt: Ref<string>
  isAuthorized: Ref<boolean>
  isSaving: Ref<boolean>
  popupContent: Ref<string>
  popupContentFunction: Ref<Function>
  activeQuestion: Ref<OpenAI.Chat.ChatCompletionMessageParam>
}

export interface QueryFormState {
  currentQuery: string | null
}

export interface FileFormState {
  file: File | null
}
