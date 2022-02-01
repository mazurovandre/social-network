import React, {Suspense} from 'react';

// WCP - Wrapped Component Props

export const withSuspense = (Component: React.ComponentType) => {
    return (props: any) => {
        return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </Suspense>
        )
    };
};