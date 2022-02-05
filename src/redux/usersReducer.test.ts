// import usersReducer, {InitialStateType, toggleFollow} from "./usersReducer";
//
// let state: InitialStateType;
//
// beforeEach(() => {
//     state = {
//         users: [
//             {id: 0, name: 'Andrey 0', followed: false,
//                 photos: {small: null, large: null},
//                 status: 'status 0'},
//             {id: 1, name: 'Andrey 1', followed: false,
//                 photos: {small: null, large: null},
//                 status: 'status 1'},
//             {id: 2, name: 'Andrey 2', followed: true,
//                 photos: {small: null, large: null},
//                 status: 'status 2'},
//             {id: 3, name: 'Andrey 3', followed: true,
//                 photos: {small: null, large: null},
//                 status: 'status 3'},
//         ],
//         totalCount: 0,
//         pageSize: 10,
//         currentPage: 1,
//         isFetching: false,
//         isFollowing: []
//     }
// })
//
// test("Toggle Follow Test", () => {
//
//     const newState1 = usersReducer(state, toggleFollow(1))
//     const newState2 = usersReducer(state, toggleFollow(2))
//
//     expect(newState1.users[0].followed).toBeFalsy();
//     expect(newState1.users[1].followed).toBeTruthy();
//
//     expect(newState2.users[2].followed).toBeFalsy();
//     expect(newState2.users[3].followed).toBeTruthy();
// })