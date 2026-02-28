import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface QuoteRequest {
    service: ServiceType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export enum ServiceType {
    gutterCleaning = "gutterCleaning",
    pressureWashing = "pressureWashing",
    lawnLandscaping = "lawnLandscaping"
}
export interface backendInterface {
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    getQuoteRequest(id: string): Promise<QuoteRequest>;
    submitQuoteRequest(name: string, phone: string, email: string, service: ServiceType, message: string): Promise<void>;
}
