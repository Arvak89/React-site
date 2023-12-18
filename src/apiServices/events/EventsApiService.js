import CoreHTTPService from "../CoreHTTPService.js";

class EventsApiService extends CoreHTTPService {
    constructor() {
        super("events");
    }

    /**
     * @return Array<EventModel>
     */
    getEvents() {
        this.GET()
    }
}

export default new EventsApiService()