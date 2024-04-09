import BlackW from '/black-w.jpg'
import BlackM from '/black-m.jpg'
import WhiteW from '/white-w.jpg'
import WhiteM from '/white-m.jpg'

type ItemsType = {
    Fullname: string,
    Job: string,
    Photo: string,
    Description: string
}[]

export const data: ItemsType = [{
    Fullname: 'John Doe',
    Job: 'Freelancer',
    Photo: WhiteM,
    Description: "The task management app has revolutionized the way I work. It's incredibly intuitive and efficient.I can now organize my tasks effortlessly, and it has significantly increased my productivity.A must- have tool for any freelancer!"
}, {
    Fullname: 'Alice Johnson',
    Job: 'Project Manager',
    Photo: WhiteW,
    Description: "As a project manager, staying organized is crucial, and this app has become an indispensable part of my workflow. The collaboration features are excellent, making it easy to coordinate tasks with my team. It's powerful yet user-friendly—a game-changer for project management."
}, {
    Fullname: 'Samuel Rodriguez',
    Job: 'Student',
    Photo: BlackM,
    Description: "Being a student with a hectic schedule, this task management app has been a lifesaver. I can keep track of assignments, deadlines, and personal tasks in one place. The simplicity and clarity of the interface make it perfect for students like me!"
}, {
    Fullname: 'Emily Smith',
    Job: 'Small Business Owner',
    Photo: BlackW,
    Description: "As a small business owner, time is of the essence. This app has streamlined my task management process, allowing me to focus on growing my business. The ability to set priorities and collaborate with my team has made a significant impact on our efficiency. Highly recommended!"
}]