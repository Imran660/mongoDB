const Student = require("../modals/student");

exports.fetchAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
};

exports.addStudent = async (req, res) => {
    try {
        const student = await new Student(req.body).save();
        res.status(201).send("Student added successfully");
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
}

exports.updateStudent= async (req,res)=>{
    try{
        const student = await Student.findOneAndUpdate({email:req.params.email},req.body,{new:true});
        res.json(student);
    }catch(err){
        console.log(err)
        res.status(500).send("Internal server error");
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({ email: req.params.email });
        res.json(student);
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
}