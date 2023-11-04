export default function StudentCard({student, index, handleDelete, setDataUpdate, setType}){
    return(
        <>
        <tr>
            <td>{index +1}</td>
            <td>{student.studentID}</td>
            <td>{student.studentName}</td>
            <td>{student.studentAge}</td>
            <td>{student.studentSex ? "Nam": "Nữ" }</td>
            <td>
                <button className="btnReset">Reset</button>
                <button onClick={()=>{
                    setDataUpdate(student)
                    setType("update");

                }} className="btnUpdate">Sửa</button>
                <button onClick={()=>{
                    handleDelete(student.studentID)
                }} className="btnDelete">Xóa</button>
            </td>
        </tr>
        </>
    )
}