
export default function StudentForm({ handleAddStudent, handleUpdate, dataUpdate, type, setType }) {

    return (
        <>
            <div className="studentForm">
                <h2>Thông Tin Sinh Viên {type == "update" ? dataUpdate.studentName : ""}</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()

                    if (type == "add") {
                        handleAddStudent({
                            studentID: e.target.studentID.value,
                            studentName: e.target.studentName.value,
                            studentAge: e.target.studentAge.value,
                            studentSex: e.target.studentSex.value == "Nam" ? true : false,
                            studentBirth: e.target.studentBirth.value,
                            studentBirthplace: e.target.studentBirthplace.value,
                            studentAdress: e.target.studentAdress.value
                        })

                        e.target.studentID.value = "";
                        e.target.studentName.value = "";
                        e.target.studentAge.value = ""
                        e.target.studentSex.value = ""
                        e.target.studentBirth.value = ""
                        e.target.studentBirthplace.value = ""
                        e.target.studentAdress.value = ""


                    }
                    if (type == "update") {
                        handleUpdate(dataUpdate.studentID, {
                            studentID: e.target.studentID.value,
                            studentName: e.target.studentName.value,
                            studentAge: e.target.studentAge.value,
                            studentSex: e.target.studentSex.value == "Nam" ? true : false,
                            studentBirth: e.target.studentBirth.value,
                            studentBirthplace: e.target.studentBirthplace.value,
                            studentAdress: e.target.studentAdress.value
                        })
                        setType("add")
                    }

                }}>
                    <div>
                        <label htmlFor="studentID">Mã Sinh Viên</label>
                        <input type="text" name="studentID" id="studentID" defaultValue={type == "update" ? dataUpdate.studentID : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentName">Tên Sinh Viên</label>
                        <input type="text" name="studentName" id="studentName" defaultValue={type == "update" ? dataUpdate.studentName : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentAge">Tuổi</label>
                        <input type="number" name="studentAge" id="studentAge" defaultValue={type == "update" ? dataUpdate.studentAge : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentSex">Giới Tính</label>
                        <input type="text" name="studentSex" id="studentSex" defaultValue={type == "update" ? dataUpdate.studentSex ? "Nam" : "Nữ " : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentBirth">Ngày Sinh</label>
                        <input type="date" name="studentBirth" id="studentBirth" defaultValue={type == "update" ? dataUpdate.studentBirth : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentBirthplace">Quê Quán</label>
                        <input type="text" name="studentBirthplace" id="studentBirthplace" defaultValue={type == "update" ? dataUpdate.studentBirthplace : ""} />
                    </div>
                    <div>
                        <label htmlFor="studentAdress">Địa Chỉ</label>
                        <input type="text" name="studentAdress" id="studentAdress" defaultValue={type == "update" ? dataUpdate.studentAdress : ""} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}