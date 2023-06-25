import { Config, OpenAPIRequest } from "../../types";
import { AccountAPI } from "../../types/openapi/v1/AccountAPI";



export default class Account implements AccountAPI {
        public request: OpenAPIRequest;
        public config: Config;
        constructor(request: OpenAPIRequest, config: Config) {
            this.request = request;
            this.config = config;
        }
        public AccountInfo(params: {}): Promise<unknown> {}
}  