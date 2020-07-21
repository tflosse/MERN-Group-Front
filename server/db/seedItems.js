const User = require("../models/users");
const Idea = require("../models/ideas");
const Comment = require("../models/comments");

User.find({}).delete(() => {
  Idea.find({}).delete(() => {
    Comment.find({}).delete(() => {
      let joanna90403 = User.create({
        username: "joanna90403",
        password: "unprotectedpw",
        email: "jo.wang@fakemail.com",
        photo: {
          src: "https://randomuser.me/api/portraits/women/90.jpg",
          alt: "joanna-wang",
        },
      }).then((user) => {
        Promise.all([
          Idea.create({
            title: "PawTracker",
            description:
              "This app uses the GPS location of a dog collar device to measure your furry friend's activity throughout the day. Depending on the settings, dog breed, and your pet's activity history, the app will alert you if the level of activity is relatively much lower than average, and if much higher than average, will send you reminder to make sure they have water and are able to rest.",
            pictures: {
              src: "https://i.imgur.com/Qsn5Vg5.png",
              alt: "puppy-collar",
            },
            keywords: ["petcare", "dog", "activity", "fitness", "exercise"],
            votes: 189,
          })
            .then((idea) => {
              Promise.all([
                Comment.create({
                  username: "ryan-horton",
                  commentBody:
                    "What a great idea, how would you account for the differences in size of dogs, it might take a small dog twice the amount of energy to cover the same distance as a bigger one...",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "joanna90403",
                  commentBody:
                    "My thoughts were for users to input that info into the app at the time of setting up, it could even include an intuitive UX feature with different sihouettes for each dog size.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
              ]).then(() => {
                idea.save();
              });
            })
            .then((idea) => {
              user.ideas.push(idea);
            }),
          Idea.create({
            title: "Doggie Date App",
            description:
              "Fill out a profile for your pets and get matched with other dogs based on their character for more fun and relaxed playdates. It always makes me so nervous taking Scooper to the park, because he is very energetic and ready to make friends but it is not well-received by all other dogs, I get scared that he might get bit for being too friendly.",
            keywords: ["petcare", "playdate", "dogs"],
            votes: 234,
          })
            .then((idea) => {
              Promise.all([
                Comment.create({
                  isAnonymous: true,
                  commentBody:
                    "I LOVE THIS! Joanna, please make it happen, that would make such a huge difference for me too, especially with how shy my Doodle is, she ends up hiding the whole time and park time is more stressful that playful.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "brandcastillo",
                  commentBody:
                    "Big fan of this one, I know someone who might be interested in developing something like this, they previously worked at a dog-walking app, and love pets too!",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "bcurtis",
                  commentBody:
                    "Haha! I have not had much success with dating apps, but maybe my dog will have better luck.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "joanna90403",
                  commentBody:
                    "Thank you for the positive feedback, would love to connect with your friend @brandcastillo.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
              ]).then(() => {
                idea.save();
              });
            })
            .then((idea) => {
              user.ideas.push(idea);
            }),
        ]).then(() => {
          user.save();
        });
      });
      let bcurtis = User.create({
        username: "bcurtis",
        password: "bcurtpasswd",
        email: "bcurt@notanemail.com",
        photo: {
          src: "https://randomuser.me/api/portraits/men/73.jpg",
          alt: "brandon-curtis",
        },
      }).then((user) => {
        Promise.all([
          Idea.create({
            title: "TuneSync",
            description:
              "This app syncs up to your music streaming app and shares your current song with a friend, allowing them to listen to the same song from the app.",
            pictures: {
              src: "https://i.imgur.com/8Qz0Qg0.png",
              alt: "music-app",
            },
            keywords: ["music", "sharing", "sync", "stream"],
            votes: 432,
          }).then((idea) => {
            user.ideas.push(idea);
          }),
        ]).then(() => {
          user.save();
        });
      });
      let brandcastillo = User.create({
        username: "brandcastillo",
        password: "brandiepasswd",
        email: "brandiecastillo@example.com",
        photo: {
          src: "https://randomuser.me/api/portraits/women/8.jpg",
          alt: "brandie-castillo",
        },
      }).then((user) => {
        Promise.all([
          Idea.create({
            title: "Book Rec",
            description:
              "Rate books you've read and loved to get more recommendations. It could be based on themes or keywords, similar writing styles. Maybe users could take a short survey when they finish a book, and with that data even start reading or book clubs?",
            keywords: ["books", "reading", "recommendations"],
            votes: 78,
          })
            .then((idea) => {
              Promise.all([
                Comment.create({
                  username: "herb-gardner",
                  commentBody:
                    "Yes, please, I don't really trust the recommendtions on popular sites anymore, it's become really mainstream to like the newest author's novel, and a lot of great books fly under the radar.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "clay-burke",
                  commentBody:
                    "I do like that a lot, and am usually happy to discuss books I've read, so a survey isn't a high price to pay to get better book recommendations. I don't know about the book club though, maybe you could incorporate a discussion forum instead?",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
                Comment.create({
                  username: "averyn",
                  commentBody:
                    "How about a rendering of the books you've read on one shelf and the ones that are recommended on another. You could also send personal recommendations to a friend's shelf?",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
              ]).then(() => {
                idea.save();
              });
            })
            .then((idea) => {
              user.ideas.push(idea);
            }),
        ]).then(() => {
          user.save();
        });
      });
      let clayburke = User.create({
        username: "clayburke",
        password: "notprotected",
        email: "cburke@fakemail.com",
        photo: {
          src: "https://randomuser.me/api/portraits/men/86.jpg",
          alt: "clayotn-burke",
        },
      }).then((user) => {
        Promise.all([
          Idea.create({
            title: "Social Language Learning",
            description:
              "Get matched up with native speakers who are trying to learn your native language too so you can freely exchange and practice, and help each other. My friend met a Brazilian traveler years back, they've kept in touch and call each other every other week, he now understands conversational Brazilian Portuguese, it's super neat!",
            keywords: ["languages", "learning", "foreign"],
            votes: 257,
          }).then((idea) => {
            Promise.all([
              Comment.create({
                username: "joanna90403",
                commentBody:
                  "I would love that, started learning French last year, but it's really hard to keep up without a native speaker to practice with. What would your go-to-market strategy look like when trying to reach people all around the world?",
              }).then((comment) => {
                idea.comments.push(comment);
              }),
            ]).then((idea) => {
              user.ideas.push(idea);
            }),
              Idea.create({
                title: "Rent your Truck",
                description:
                  "So I recently moved and something dawned on me: I don't know a single person who drives a truck. Rental places were all rented out because it was the 30th of the month and, I found myself renting a huge flatbed when I only had a few items left to move, which turned the whole operation into something much more complicated than it should have been. How great would it be if you could rent a truck from someone near you and facilitate it with a company that can handle security and insurance stuff for you? Just a thought.",
                keywords: ["moving", "trucks", "rental"],
                votes: 137,
              })
                .then((idea) => {
                  Promise.all([
                    Comment.create({
                      isAnonymous: true,
                      commentBody:
                        "Getting insurance to get onboard with this will be difficult, so many issues down the road in case on an accident...",
                    }).then((comment) => {
                      idea.comments.push(comment);
                    }),
                    Comment.create({
                      username: "averyn",
                      commentBody:
                        "I disagree with anonymous above, I think it might be complicated but possible to sign up for individual insurance, you could probably reach out to several companies. I think making it quick and easy to find and automating all the paperwork would be a game-changer for the moving industry. People do ride-sharing all the time!",
                    }).then((comment) => {
                      idea.comments.push(comment);
                    }),
                  ]).then(() => {
                    idea.save();
                  });
                })
                .then((idea) => {
                  user.ideas.push(idea);
                });
          }),
        ]).then(() => {
          user.save();
        });
      });
      let christinaj = User.create({
        username: "christinaj",
        password: "cjensenpassword",
        email: "tinajensen@example.com",
        photo: {
          src: "https://randomuser.me/api/portraits/women/4.jpg",
          alt: "christina-jensen",
        },
      }).then((user) => {
        Promise.all([
          Idea.create({
            title: "BugID",
            description:
              "How about an application that would help people identify the bugs in their homes? With two or three pictures, the app would let you know if the bug could bite or be harmful. That would be useful.",
            keywords: ["bugs", "pest-control", "house", "home"],
            votes: 73,
          })
            .then((idea) => {
              Promise.all([
                Comment.create({
                  username: "ryan-horton",
                  commentBody:
                    "You might need an extensive database of pictures to compare it to, but it would be useful, I always worry that I might get bit by spiders, when my roommate says they're harmless.",
                }).then((comment) => {
                  idea.comments.push(comment);
                }),
              ]).then(() => {
                idea.save();
              });
            })
            .then((idea) => {
              user.ideas.push(idea);
            }),
        ]).then(() => {
          user.save();
        });
      });
    });
  });
});
