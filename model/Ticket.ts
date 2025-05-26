import type { Ticket } from "./types";

export class TicketModel implements Ticket {
    id: number;
    title: string;
    description: string;
    resolved_on: string | Date;
    created_at: string | Date;
    updated_at: string | Date;
    invoice: number;
    customer: number;

    constructor(id: number, title: string, description: string, resolved_on: string, created_at: string | Date, updated_at: string | Date, invoice: number, customer: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.resolved_on = resolved_on;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.invoice = invoice;
        this.customer = customer;
    }
}