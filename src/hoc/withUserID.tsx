import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type MapStateToPropsType = {
    userId: number | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    userId: state.auth.userId
});


export function withUserID<WCP>(Component: React.ComponentType<WCP>) {
    const WithUserIDComponent:FC<MapStateToPropsType> = (props) => {
        const {userId, ...restProps} = props
        const {ID} = useParams<{ID?: string}>()

        if (ID) {
            return <Component userId={Number(ID)} {...restProps as WCP} />
        }
        return <Component userId={userId} {...restProps as WCP} />
    }

    return connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)(WithUserIDComponent)
}

export default withUserID