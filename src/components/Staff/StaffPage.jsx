import React, {useState} from 'react'
import SelectedCard from './SelectedCard';
import MemberCards from './MemberCards';
import Style from './StaffPage.module.css'


const StaffPage = () => {


    const data = [
        {
            name: "Fulanito de tal",
            rol: "Presidente",
            image: "https://picsum.photos/201/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel est imperdiet, accumsan massa eget, congue arcu. Donec ante nisl, dapibus non ante tristique, tincidunt vestibulum augue. Vivamus euismod tincidunt lectus eget sagittis. In nunc ipsum, interdum in dictum ut, porta cursus sem. Quisque rutrum laoreet arcu, at congue lacus hendrerit et. Nam et arcu fringilla, volutpat justo et, lacinia mauris."
        },
        {
            name: "Jaimito Fernandez",
            rol: "Ceo / CoFunder",
            image: "https://picsum.photos/200/302",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel est imperdiet, accumsan massa eget, congue arcu. Donec ante nisl, dapibus non ante tristique, tincidunt vestibulum augue. Vivamus euismod tincidunt lectus eget sagittis. In nunc ipsum, interdum in dictum ut, porta cursus sem. Quisque rutrum laoreet arcu, at congue lacus hendrerit et. Nam et arcu fringilla, volutpat justo et, lacinia mauris."
        },
        {
            name: "Julian Fernandez",
            rol: "Ceo / CoFunder",
            image: "https://picsum.photos/201/304",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel est imperdiet, accumsan massa eget, congue arcu. Donec ante nisl, dapibus non ante tristique, tincidunt vestibulum augue. Vivamus euismod tincidunt lectus eget sagittis. In nunc ipsum, interdum in dictum ut, porta cursus sem. Quisque rutrum laoreet arcu, at congue lacus hendrerit et. Nam et arcu fringilla, volutpat justo et, lacinia mauris."
        },
        {
            name: "Jorge Fernandez",
            rol: "Ceo / CoFunder",
            image: "https://picsum.photos/220/302",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel est imperdiet, accumsan massa eget, congue arcu. Donec ante nisl, dapibus non ante tristique, tincidunt vestibulum augue. Vivamus euismod tincidunt lectus eget sagittis. In nunc ipsum, interdum in dictum ut, porta cursus sem. Quisque rutrum laoreet arcu, at congue lacus hendrerit et. Nam et arcu fringilla, volutpat justo et, lacinia mauris."
        },
        {
            name: "Julian Fernandez",
            rol: "Ceo / CoFunder",
            image: "https://picsum.photos/210/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel est imperdiet, accumsan massa eget, congue arcu. Donec ante nisl, dapibus non ante tristique, tincidunt vestibulum augue. Vivamus euismod tincidunt lectus eget sagittis. In nunc ipsum, interdum in dictum ut, porta cursus sem. Quisque rutrum laoreet arcu, at congue lacus hendrerit et. Nam et arcu fringilla, volutpat justo et, lacinia mauris."
        },
    ];

    const [selectedMember, setSelectedMember] = useState(data[0])
    

    return (
        <>
        <h1 className={Style.title}>¡Nuestro Staff!</h1>

        <SelectedCard member={selectedMember}/>

        <MemberCards data={data} selectMember={setSelectedMember} />
        </>
    )
}

export default StaffPage;
