import {toggleFollowThunk} from "./usersReducer";
import {followAPI, ResponseAPIType} from "../api/api";
import {ResultCodes} from "../types/types";
jest.mock('../api/api')
const followAPIMock = followAPI

const result: ResponseAPIType = {
    resultCode: ResultCodes.Success,
    messages: [],
    data: {}
}

// @ts-ignore
followAPIMock.followUser.mockReturnValue(Promise.resolve(result))

test('toggleFollowThunk Test', async () => {
    const thunk = toggleFollowThunk(1, true)
    const dispatchMock = jest.fn();

    // @ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)


})