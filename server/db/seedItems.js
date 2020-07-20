const User = require('../models/users');
const Idea = require('../models/ideas');
const Comment = require('../models/comments');

User.find({}).delete(() => {
    Idea.find({}).delete(() => {
        let joanna90403 = User.create({
            username: "joanna90403",
            password: "unprotectedpw",
            email: "jo.wang@fakemail.com",
            photo: { src: "https://randomuser.me/api/portraits/women/90.jpg", alt: "joanna-wang"} 
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 214
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        })
                    ]).then(() => {
                        idea.save()
                    })
                }).then(idea => {
                    user.ideas.push(idea)
                }),
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 28
                }).then(idea => {
                    user.ideas.push(idea)
                }),
            ]).then(() => {
                user.save()
            })
        })
        let bcurtis = User.create({
            username: "bcurtis",
            password: "bcurtpasswd",
            email: "bcurt@notanemail.com",
            photo: { src: "https://randomuser.me/api/portraits/men/73.jpg", alt: "brandon-curtis"}
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 214
                }).then(idea => {
                    user.ideas.push(idea)
                })
            ]).then(() => {
                user.save()
            })
        })
        let brandcastillo = User.create({
            username: "brandcastillo",
            password: "brandiepasswd",
            email: "brandiecastillo@example.com",
            photo: { src: "https://randomuser.me/api/portraits/women/8.jpg", alt: "brandie-castillo"}
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 28
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        })
                    ]).then(() => {
                        idea.save()
                    })
                }).then(idea => {
                    user.ideas.push(idea)
                })
            ]).then(() => {
                user.save()
            })
        })
        let clayburke = User.create({
            username: "clayburke",
            password: "notprotected",
            email: "cburke@fakemail.com",
            photo: { src: "https://randomuser.me/api/portraits/men/86.jpg", alt: "clayotn-burke"}
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 214
                }).then(idea => {
                    user.ideas.push(idea)
                }),
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 28
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        })
                    ]).then(() => {
                        idea.save()
                    })
                }).then(idea => {
                    user.ideas.push(idea)
                }),
            ]).then(() => {
                user.save()
            })
        })
        let christinaj = User.create({
            username: "christinaj",
            password: "cjensenpassword",
            email: "tinajensen@example.com",
            photo: { src: "https://randomuser.me/api/portraits/women/4.jpg", alt: "christina-jensen"}
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "",
                    description: "",
                    keywords: ["", "", ""],
                    votes: 28
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: ""
                        }).then(comment => {
                            idea.comments.push(comment)
                        })
                    ]).then(() => {
                        idea.save()
                    })
                }).then(idea => {
                    user.ideas.push(idea)
                })
            ]).then(() => {
                user.save()
            })
        })
    })
});