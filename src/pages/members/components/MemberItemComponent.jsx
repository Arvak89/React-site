import styles from "./MemberItemComponent.module.css"

export default function MemberItemComponent({
                                                member,
                                                onClick,
                                            }) {
    return (
        <div className={styles.memberItemComponentContainer} onClick={onClick}>
            <div>
                <div className={styles.memberItemTitle}>{member.name}</div>
                <div className={styles.memberItemEmail}>{member.email}</div>
            </div>
        </div>
    )
}