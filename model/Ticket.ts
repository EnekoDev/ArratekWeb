import type { Ticket } from "./types";

export class TicketModel implements Ticket {
    id: number
    title: string
    description: string
    answer: string | null
    resolved_on: string | Date
    created_at: string | Date
    updated_at: string | Date
    invoice_id: number
    customer_id: number

    constructor(id: number, title: string, description: string, answer: string|null, resolved_on: string, created_at: string | Date, updated_at: string | Date, invoice_id: number, customer_id: number) {
        this.id = id
        this.title = title
        this.description = description
        this.answer = answer
        this.resolved_on = resolved_on
        this.created_at = created_at
        this.updated_at = updated_at
        this.invoice_id = invoice_id
        this.customer_id = customer_id
    }
}