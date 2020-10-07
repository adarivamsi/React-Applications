class Enquiry {
    id;
    courseName;
    name;
    email;
    phone;

    constructor(id, courseName, name, email, phone) {
        this.id = id
        this.courseName = courseName
        this.name = name
        this.email = email
        this.phone = phone
    }
}

export default Enquiry