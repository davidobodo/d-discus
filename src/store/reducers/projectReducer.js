const initState = {

    1111 : {
      id: 1111,
      title: "first project",
      content: "this is my first project",
      authorFirstName: "David",
      authorLastName: "Obodo"
    },
  
  2222: {
      id: 2222,
      title: "second project",
      content: "this is my first project",
      authorFirstName: "David",
      authorLastName: "Obodo"
    },

  3333: {
      id: 3333,
      title: "third project",
      content: "this is my first project",
      authorFirstName: "David",
      authorLastName: "Obodo"
    }
  
  }


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