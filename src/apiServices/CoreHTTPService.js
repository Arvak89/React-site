import axios from "axios";

export default class CoreHTTPService {
    constructor(basePath, hostName) {
        this.basePath = basePath
        this.hostName = hostName
    }

    /**
     * GET запрос
     *
     * @param {string} path - Api путь
     * @param {object} options - Параметры запроса
     */
    GET(path = "", options = null) {
        return this.safeFetch(`${this.basePath}/${path}`, "get", null, options);
    }

    /**
     * POST запрос
     *
     * @param {string} path - Api путь
     * @param data {object|null} - данные для передачи
     * @param {AxiosRequestConfig|null} options - Параметры запроса
     */
    POST(
        path = "",
        data = null,
        options = null,
    ) {
        return this.safeFetch(`${this.basePath}/${path}`, "post", data, options);
    }

    /**
     * Запрос
     *
     * @param {string} path - Api путь
     * @param {string} method - Метод
     * @param {string|null} data - Тело
     * @param {Object} options - Параметры запроса
     * @returns {Object|string}
     */
    async safeFetch(
        path,
        method,
        data,
        options = {},
    ) {
        if (!options.headers) {
            options.headers = {"Content-Type": "application/json"};
        }
        if (options.headers && !options.headers["Content-Type"]) {
            options.headers["Content-Type"] = "application/json";
        }
        const baseURL = this.hostName;
        const url = `${path}`;

        try {
            const response = await axios.request({
                baseURL,
                url,
                method,
                data,
                ...options,
            });

            return response.data;
        } catch (errorData) {
            if (axios.isCancel(errorData)) {
                console.log(errorData);
                return {};
            }

            throw errorData.response;
        }
    }
}