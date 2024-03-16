
export type routerType = {
    name: string
    meta:{ 
        title:string
    }
}


export type resTable<T> = {
    data: T
    total: number
}