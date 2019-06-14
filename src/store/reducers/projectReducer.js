const initState = {
	projects: [
		 {
    "userId": 1,
    "id": 1,
    "title": "title one of three",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
   {
    "userId": 1,
    "id": 2,
    "title": "he he he",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "smart girls on my mind",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }

	]

}

const projectReducer = ( state= initState, action) => {

  switch(action.type){
    case 'CREATE_PROJECT':
    console.log('create project', action.project);
    return state;
    case 'CREATE_PROJECT_ERROR':
    console.log('create project error', action.error);
    return state;
    default :
    return state;
  }
};

export default projectReducer;