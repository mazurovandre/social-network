import React, {Suspense} from 'react';

// WCP - Wrapped Component Props

export function withSuspense<WCP>(Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </Suspense>
        )
    };
}