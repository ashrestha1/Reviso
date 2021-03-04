export default (state, action) => {
  switch (action.type) {
  case 'problemSet/delete':
    return {
      ...state,
      problemSets: [
	...state.problemSets.slice(0, action.payload.idx),
	...state.problemSets.slice(action.payload.idx + 1)
      ]
    }
  case 'problemSet/addProblem':
    return {
      ...state,
      problemSets: [
        ...state.problemSets.slice(0, action.payload.idx),
	{
          ...state.problemSets[action.payload.idx],
          problems: [
	    ...state.problemSets[action.payload.idx].problems,
	    action.payload.problem
	  ]
        },
	...state.problemSets.slice(action.payload.idx + 1)
      ]
    }
  // TODO
  default:
    return state
  }
}
