import PageHeader from "../../components/ PageHeader/PageHeader.jsx";
import styles from "./EventsPage.module.css"
import {Tabs} from 'antd';
import Select from 'react-select'
import EventItemComponent from "./components/EventItemComponent.jsx";
import {useState} from "react";
import {mockModels} from "../../apiServices/events/EventModel.js";
import Modal from "../../components/Modal/Modal.jsx";
import {Controller, useForm} from "react-hook-form"
import "./modal.scss"

const TabFilters = {
    ACTIVE: 'ACTIVE',
    PASSED: 'PASSED',
}

const EventsPage = () => {

    const [modalActive, setModalActive] = useState(false)

    const options = [
        {
            label: "Максим Максимов", value: "1"
        },
        {
            label: "Иван Иванов", value: "2"
        },
        {
            label: "Андрей Попов", value: "3"
        },
    ];

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: {errors}
    } = useForm()

    const [state, setState] = useState({
        events: mockModels,
        selectedFilter: TabFilters.ACTIVE,
    });

    const [isCreateEventModalActive, setIsCreateEventModalActive] = useState(false);

    const labelClassName = (key) => {
        if (key === state.selectedFilter) {
            return styles.eventsPageTabsBarContentSelected
        } else {
            return styles.eventsPageTabsBarContentDefault
        }
    }

    const labelText = (tabFilter) => {
        switch (tabFilter) {
            case TabFilters.ACTIVE:
                return "Активные"
            case TabFilters.PASSED:
                return "Прошедшие"
        }
    }

    const onTabChanged = (selectedTab) => {
        setState({
            ...state,
            selectedFilter: selectedTab
        })
    }

    const tabFilters = Object.keys(TabFilters).map((tabFilter) => {
            return {
                key: tabFilter,
                label: (
                    <div className={labelClassName(tabFilter)}>
                        {labelText(tabFilter)}
                    </div>
                ),
            }
        }
    )

    const filteredEvents = () => {
        return state.events.filter((event) => {
            switch (state.selectedFilter) {
                case TabFilters.ACTIVE:
                    return event.isActive
                case TabFilters.PASSED:
                    return !event.isActive
            }
        })
    }

    const onSendBtnClick = () => {
        setModalActive(true)
    }

    const onCreateEventBtnClick = () => {
        setIsCreateEventModalActive(true)
    }

    const onFormSubmit = (data) => {
        setValue('select', [])
        setValue('text', "")
        setModalActive(false)
    }

    return (
        <>
            <div onClick={() => setModalActive(false)} className={modalActive ? "modal modal_active" : "modal"}>
                <div onClick={(event) => event.stopPropagation()} className="modal__window">
                    <div className="modal__content">
                        <form className={styles.formContent} onSubmit={handleSubmit(onFormSubmit)}>
                            <h2 className={styles.titleModal}>Разослать мероприятие</h2>
                            <textarea {...register("text", {required: true})} className={styles.text}/>
                            <Controller
                                control={control}
                                name="select"
                                render={({field}) => (
                                    <Select
                                        className={styles.select}
                                        {...field}
                                        isMulti
                                        options={options}/>
                                )}
                            />
                            < input type="submit" className={styles.button}/>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.eventsPageContentContainer}>
                <PageHeader text={"Мероприятия"}/>
                <div className={styles.tabsWithCreateButtonContainer}>
                    <Tabs
                        items={tabFilters}
                        onChange={onTabChanged}
                    />
                    <button className={styles.createNewEventButton} onClick={onCreateEventBtnClick}>
                        Создать новое
                    </button>
                </div>
                <div className={styles.eventsListContainer}>
                    {
                        filteredEvents().map((event) => {
                            return (
                                <div key={event.id}>
                                    <EventItemComponent event={event} onSendBtnClick={onSendBtnClick}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Modal active={isCreateEventModalActive} setActive={setIsCreateEventModalActive}/>
            </div>
        </>
    )
}

export default EventsPage