const User = require('../models/users');
const Idea = require('../models/ideas');
const Comment = require('../models/comments');

User.find({}).delete(() => {
    Idea.find({}).delete(() => {
        Comment.find({}).delete(() => {
        let joanna90403 = User.create({
            username: "joanna90403",
            password: "unprotectedpw",
            email: "jo.wang@fakemail.com",
            photo: { src: "https://randomuser.me/api/portraits/women/90.jpg", alt: "joanna-wang"} 
        }).then(user => {
            Promise.all([
                Idea.create({
                    title: "PawTracker",
                    description: "This app uses the GPS location of a dog collar device to measure your furry friend's activity throughout the day. Depending on the settings, dog breed, and your pet's activity history, the app will alert you if the level of activity is relatively much lower than average, and if much higher than average, will send you reminder to make sure they have water and are able to rest.",
                    pictures: {src: "https://i.imgur.com/Qsn5Vg5.png", alt: "puppy-collar"},
                    keywords: ["petcare", "dog", "activity", "fitness", "exercise"],
                    votes: 214
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: "What a great idea, "
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
                    title: "TuneSync",
                    description: "This app syncs up to your music streaming app and shares your current song with a friend, allowing them to listen to the same song from the app.",
                    pictures: {src: "https://i.imgur.com/8Qz0Qg0.png", alt: "music-app"},
                    keywords: ["music", "sharing", "sync", "stream"],
                    votes: 432
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
                    title: "BugID",
                    description: "How about an application that would help people identify the bugs in their homes? With two or three pictures, the app would let you know if the bug could bite or be harmful. That would be useful.",
                    keywords: ["bugs", "pest-control", "house", "home"],
                    votes: 73
                }).then(idea => {
                    Promise.all([
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: "You might need an extensive database of pictures to compare it to, but it would be useful, I always worry that I might get bit by spiders, when my roommate says their harmless."
                        }).then(comment => {
                            idea.comments.push(comment)
                        }),
                        Comment.create({
                            username: "ryan-horton",
                            commentBody: "*they're :( oops"
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
        })})
    })
});