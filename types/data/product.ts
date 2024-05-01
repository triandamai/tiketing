export type Product ={
    content: string | null
    cover: string | null
    created_at: string
    id: number
    title: string | null
    updated_at: string | null
}

export type ProductForm = {
    content:string,
    cover:File|null,
    productName:string
}

export type ProductCategory = {
    category_group: string | null
    created_at: string
    id: number
    name: string | null
    updated_at: string | null
    value: string | null
}

export type ProductPrice={
    category_id: number | null
    created_at: string
    duration: string | null
    exclude: string | null
    id: number
    include: string | null
    name: string | null
    price: number | null
    product_id: number | null
    result: string | null
    updated_at: string | null
}

export const productHeader = [
    {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
    },
    {
        title: 'Judul',
        align: 'start',
        sortable: false,
        key: 'title',
    },
    {
        title: 'Tanggal update',
        align: 'start',
        sortable: false,
        key: 'created_at',
    },
    {
        title: 'Aksi',
        align: 'start',
        sortable: false,
        key: 'action',
    }
]