class Task {
    id;
    title;
    description;
    completed;
    date;

    constructor(id, title, description = "", completed = false, date = new Date()) {
        this.id = id
        this.title = title
        this.description = description
        this.completed = completed
        this.date = date
    }
}

export default Task