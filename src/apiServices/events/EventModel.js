export default class EventModel {
    constructor(id, title, date, wasSentOut, isActive, tags) {
        this.title = title
        this.date = date
        this.wasSentOut = wasSentOut
        this.isActive = isActive
        this.tags = tags
    }
}

export const mockModels = [
    new EventModel(
        0,
        "Вечеринка",
        "Сегодня",
        false,
        true,
        [],
    ),
    new EventModel(
        1,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        2,
        "Вечеринка",
        "Сегодня",
        false,
        true,
        [],
    ),
    new EventModel(
        3,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        4,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        5,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        6,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        7,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        8,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        9,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        10,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        11,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        12,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        13,
        "Вечеринка",
        "Сегодня",
        true,
        true,
        [],
    ),
    new EventModel(
        14,
        "Вечеринка",
        "Сегодня",
        true,
        false,
        [],
    ),
    new EventModel(
        15,
        "Вечеринка",
        "Сегодня",
        true,
        false,
        [],
    ),
    new EventModel(
        16,
        "Вечеринка",
        "Сегодня",
        true,
        false,
        [],
    ),
    new EventModel(
        17,
        "Вечеринка",
        "Сегодня",
        true,
        false,
        [],
    ),
    new EventModel(
        18,
        "Вечеринка",
        "Сегодня",
        true,
        false,
        [],
    ),
]