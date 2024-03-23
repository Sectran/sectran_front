
export type routerType = {
    name: string
    meta: {
        title: string
    }
}

export type resTable<T> = {
    data: T
    total: number
}



export type Router = {
    path: string
    component: Function
    name: string
    meta: {
        title: string
        limits?: string
    }
    children?: Router[]
}