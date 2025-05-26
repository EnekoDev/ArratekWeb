type Ticket = {
    id: number
    title: string
    description: string
    resolved_on: string | Date
    created_at: string | Date
    updated_at: string | Date
    customer: number
    invoice: number
}

export type { Ticket }