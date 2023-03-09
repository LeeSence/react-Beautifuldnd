export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns:[
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Todo-1',
                    cardOrder: ['card-1'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            image: null
                        },
                       
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Todo-2',
                    cardOrder: [ 'card-2'],
                    cards: [
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 8',
                            image: null
                        },
                        
                        
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Todo-3',
                    cardOrder: [ 'card-3', 'card-4', 'card-5'],
                    cards: [
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 3',
                            image: "https://item.kakaocdn.net/do/1401e813472967e3b572fee1ee192eb89f17e489affba0627eb1eb39695f93dd"
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 4',
                            image: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 5',
                            image: null
                        },
                        
                    ]
                }
            ]
        }
    ]
}