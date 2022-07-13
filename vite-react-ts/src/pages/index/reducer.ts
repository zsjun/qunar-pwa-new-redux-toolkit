export interface journeyState {
  from: string
  to: string
}
export type Action =
  | { type: 'changeFrom'; payload: string }
  | { type: 'changeTo'; payload: string }
  | { type: 'exChange' }
export const journeyInitState: journeyState = {
  from: '北京',
  to: '上海',
}
export function journeyReducer(
  state: journeyState,
  action: Action
): journeyState {
  switch (action.type) {
    case 'changeFrom':
      return { ...state, from: action.payload }
    case 'changeTo':
      return { ...state, to: action.payload }
    case 'exChange': {
      const from = state.from
      return { from: state.to, to: from }
    }
    default:
      throw new Error()
  }
}
