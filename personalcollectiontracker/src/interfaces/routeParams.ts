export interface RouteParams {
    params: Promise<{ [param: string]: string }>;
}
