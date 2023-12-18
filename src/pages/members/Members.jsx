import {useEffect, useState} from 'react';
import styles from "./Members.module.css"
import MemberItemComponent from "./components/MemberItemComponent.jsx";
import {useNavigate} from "react-router-dom";
import PageHeader from "../../components/ PageHeader/PageHeader.jsx";
import {SearchOutlined} from "@ant-design/icons";

const members = [
    {
        id: 1,
        name: "Ivan",
        email: "ivan@mail.ru",
        interests: ["football", "programming"]
    },
    {
        id: 2,
        name: "Inna",
        email: "inna@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 3,
        name: "Alexander Shishnov",
        email: "test1@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 4,
        name: "Georgy Shpikov",
        email: "test2@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 5,
        name: "Test5",
        email: "test5@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 6,
        name: "Test6",
        email: "test6@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 7,
        name: "Test7",
        email: "test7@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 8,
        name: "Test8",
        email: "test8@mail.ru",
        interests: ["programming", "food"]
    },
    {
        id: 9,
        name: "Test9",
        email: "test9@mail.ru",
        interests: ["programming", "food"]
    }
]

const Members = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredList, setFilteredList] = useState(members)
    const [categoryTerm, setCategoryTerm] = useState(new Set())
    const navigate = useNavigate();

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filtered = filter(searchTerm)
            console.log(filterCategory(filtered))
            setFilteredList(filterCategory(filtered))
        }, 300)

        return () => clearTimeout(Debounce)
    }, [searchTerm, categoryTerm])


    const chooseCategory = (category) => {
        if (!categoryTerm.has(category)) {
            setCategoryTerm(prev => new Set(prev).add(category))
        } else {
            setCategoryTerm(prev => {
                const next = new Set(prev)
                next.delete(category)
                return next
            })
        }
    }

    const filterCategory = (arr) => {

        if (categoryTerm.size === 0) return arr

        return arr.filter(item => {

            for (const el of categoryTerm) {
                if (!item.interests.includes(el))
                    return false
            }
            return true
        })
    }

    const filter = (searchText) => {
        if (!searchText) return members
        return members.filter(({name}) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const interests = (interests) => {
        return interests.map((value) => (
                <div className={"right__interest"} key={value} onClick={() => {
                    chooseCategory(value)
                }}>{value}</div>
            )
        )
    }

    const onUserClick = (userId) => {
        console.log("CLICKCK")
        console.log(userId)
        const userIdStr = userId.toString()
        navigate('/members/' + userIdStr)
    }

    return (
        <div className={styles.membersPageContentContainer}>
            <PageHeader text={"Участники сообщества"}/>
            <div className={styles.membersHeader}>
                <SearchOutlined className={styles.membersSearchIcon}/>
                <input
                    className={styles.membersSearch}
                    placeholder={"Поиск по имени или email"}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/*<select className={styles.membersSelect} multiple={"multiple"}*/}
                {/*        onChange={(e) => chooseCategory(e.target.value)}>*/}
                {/*    <option value="football">football</option>*/}
                {/*    <option value="food">food</option>*/}
                {/*    <option value="programming">programming</option>*/}
                {/*</select>*/}
            </div>
            <div className={styles.membersListContainer}>
                {
                    filteredList.map((item) => {
                        return (
                            <div key={item.id}>
                                <MemberItemComponent member={item} onClick={
                                    () => onUserClick(item.id)
                                }/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Members;