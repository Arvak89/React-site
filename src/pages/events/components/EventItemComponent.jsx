import styles from "./EventItmComponent.module.css"

export default function EventItemComponent({
                                               event,
                                               onClick,
                                               onSendBtnClick
                                           }) {
    return (
        <>
            <div className={styles.eventItemComponentContainer} onClick={onClick}>
                <div>
                    <div className={styles.eventItemTitle}>
                        {event.title}
                    </div>
                    <div className={styles.eventItemDate}>
                        {event.date}
                    </div>
                </div>
                {!event.wasSentOut &&
                    <button className={styles.eventItemSendBtn} onClick={onSendBtnClick}>Разослать</button>
                }
            </div>
        </>
    )
}