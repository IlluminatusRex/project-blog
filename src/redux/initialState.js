const initialState = {
    posts: [
      {
        id: '1',
        title: 'Article title 1',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        author: 'John Doe',
        category: 'Movies'
      },
      {
        id: '2',
        title: 'Article title 2',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-03-2022'),
        author: 'Martin Smith',
        category: 'News'
      },
      {
        id: '3',
        title: 'Article title 3',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-04-2022'),
        author: 'Samantha Fox',
        category: 'Sport'
      },
      {
        id: '4',
        title: 'Article title 4',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-05-2022'),
        author: 'Rob Roy',
        category: 'Sport'
      }
    ],
  
    categories: [
      'Sport',
      'News',
      'Movies'
    ]
  };
  
  export default initialState;