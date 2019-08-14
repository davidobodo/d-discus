const initState = [
  {
    id: 1,
    title: "first project",
    content: "this is my first project",
    authorFirstName: "David",
    authorLastName: "Obodo"
  },

  {
    id: 2,
    title: "second project",
    content: "this is my first project",
    authorFirstName: "David",
    authorLastName: "Obodo"
  }]


const projectReducer = (state = initState, action) => {

  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default:
      return state;
  }
};

export default projectReducer;