import * as React from 'react'
import Nav from './Nav'

export default function Layout({children} : React.PropsWithChildren) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}