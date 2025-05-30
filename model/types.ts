type ApiResponse = {
    data: Array<Ticket|Invoice>,
    meta: {
        perPage: number,
        page: number,
        total: number
    }
}

type Ticket = {
    id: number
    title: string
    description: string
    answer: string | null
    resolved_on: string | Date
    created_at: string | Date
    updated_at: string | Date
    customer_id: number
    invoice_id: number
}

type Invoice = {
    id: number
    number: string
    date: string | Date
    total_time: number
    total_price: number
    tax: number
    created_at: string | Date
    updated_at: string | Date
    customer_id: number
}

export type { ApiResponse, Ticket, Invoice }