import type { Invoice } from "./types";

export class InvoiceModel implements Invoice {
    id: number
    number: string
    date: string | Date
    total_time: number
    total_price: number
    tax: number
    created_at: string | Date
    updated_at: string | Date
    customer_id: number

    constructor(id: number, number: string, date: string|Date, total_time: number, total_price: number, tax: number, created_at: string | Date, updated_at: string | Date, customer_id: number) {
        this.id = id
        this.number = number
        this.date = date
        this.total_time = total_time
        this.total_price = total_price
        this.tax = tax
        this.created_at = created_at
        this.updated_at = updated_at
        this.customer_id = customer_id
    }
}