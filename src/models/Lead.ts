import { Contact } from "./Contact";
import { Status } from "./Status";

export interface Lead {
    id: bigint,
    name: string,
    price: bigint,
    status: Status,
    responsible_user: string,
    created_at: string,
    contacts: Contact[]
}