export default (state, action) => {
  switch (action.type) {
  case 'problemSet/delete':
    return { ...state, problemSets: state.problemSets.slice(0, action.payload.idx).concat(state.problemSets.slice(action.payload.idx + 1)) }
  // TODO
  default:
    return state
  }
}
