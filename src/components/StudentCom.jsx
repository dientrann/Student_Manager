import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentTool from "./StudentTool";
import './studentStyle.scss'

export default function StudentCom() {
    const [students, setStudents] = useState([{
        studentID: "17059981",
        studentName: "Nguyễn Văn A",
        studentAge: 24,
        studentSex: true,
        studentBirth: "2023-11-16",
        studentBirthplace: "Nghệ An",
        studentAdress: "TPHCM"
    },
    {
        studentID: "17059982",
        studentName: "Nguyễn Văn B",
        studentAge: 24,
        studentSex: false,
    }])

    const [type, setType] = useState("add")

    const [dataUpdate, setDataUpdate] = useState(null)

    function handleAddStudent(newStudent) {
        setStudents([...students, newStudent])
    }

    function handleDelete(id) {
        setStudents(students.filter((student) => {
            return student.studentID != id;
        }))
    }

    function handleUpdate(id, newData) {
        setStudents(students.map((student) => {
            if (student.studentID == id)
                return newData
            return student
        }))
    }

    const [listSearch, setListSearch] = useState(null)
    const [dataSearch, setDataSearch] = useState(null)
    const [typeTable, setTypeTable] = useState("table")

    useEffect(()=>{
       setListSearch(students.filter((student)=>{
            return student.studentID.includes(dataSearch)
       }))
    },[students])
    
    const [listSort, setListSort] = useState(students)
    const [statusSort, setStatusSort] = useState(true)

    function handleSortAge(){
        setListSort(students.sort((studentA, studentB)=>{
            return studentA.studentAge -  studentB.studentAge
        }))
    }
    
    return (
        <>
            <div className="containerBody">
                <div className="contentBody">
                    <div className="leftContent">
                        <StudentTool setType={setType} setDataUpdate={setDataUpdate} students={students} setDataSearch={setDataSearch} setTypeTable={setTypeTable} setListSearch={setListSearch} handleSortAge={handleSortAge} setStatusSort={setStatusSort} statusSort={statusSort} />
                        <StudentList students={students} handleDelete={handleDelete} setDataUpdate={setDataUpdate} setType={setType} listSearch={listSearch} typeTable={typeTable} listSort={listSort}/>
                    </div>
                    <div className="rightContent">
                        <StudentForm key={Date.now() * Math.random()} handleAddStudent={handleAddStudent} handleUpdate={handleUpdate} dataUpdate={dataUpdate} type={type} setType={setType} />
                    </div>

                </div>
            </div>

        </>
    )
}