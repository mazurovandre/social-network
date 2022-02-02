import Preloader from 'components/common/Preloader/Preloader';
import React, {Suspense} from 'react';

// WCP - Wrapped Component Props

export function withSuspense<WCP>(Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    };
}