const seedUsers=[
    {
        username: "joanna90403",
        password: "unprotectedpw",
        email: "jo.wang@fakemail.com",
        photo: { src: "https://randomuser.me/api/portraits/women/90.jpg", alt: "joanna-wang"},
        ideas: [{
            authorInfo: {
                isAnonymous: false,
                username: "joanna90403",
                canContact: false
            },
            ideaBody: {
                    title: "",
                    description: "",
                    pictures: [{
                        src: String,
                        alt: String
                    }],
                    keywords: [],
                    // should be an array of strings
                    votes: { type: Number, default: 0 }
                    // counter
            },
            comments: [
                {
                    username: "",
                    isAnonymous: false,
                    commentBody: ""
                },
                {
                    username: "",
                    isAnonymous: false,
                    commentBody: ""
                },
                {
                    isAnonymous: true,
                    commentBody: ""
                }]
        },
        {
            authorInfo: {
                isAnonymous: false,
                username: "joanna90403",
                canContact: false
            },
            ideaBody: {
                    title: "",
                    description: "",
                    pictures: [{
                        src: String,
                        alt: String
                    }],
                    keywords: [],
                    // should be an array of strings
                    votes: { type: Number, default: 0 }
                    // counter
            },
            comments: [
                {
                    username: "",
                    isAnonymous: false,
                    commentBody: ""
                },
                {
                    username: "",
                    isAnonymous: false,
                    commentBody: ""
                },
                {
                    isAnonymous: true,
                    commentBody: ""
                }]
        }]
    },
    {
        username: "ryan-horton",
        password: "password",
        email: "ryan.horton@example.com",
        photo: { src: "https://randomuser.me/api/portraits/men/27.jpg", alt: "ryan-horton"},
        ideas: [{}]
    },
    {
        username: "bcurtis",
        password: "bcurtpasswd",
        email: "bcurt@notanemail.com",
        photo: { src: "https://randomuser.me/api/portraits/men/73.jpg", alt: "brandon-curtis"},
        ideas: [{}]
    },
    {
        username: "averyn",
        password: "averyspw",
        email: "averynelson92@example.com",
        photo: { src: "https://randomuser.me/api/portraits/women/21.jpg", alt: "avery-nelson"},
        ideas: [{}]
    },
    {
        username: "herb-gardner",
        password: "thispassword",
        email: "herbert.gardner@fakemail.com",
        photo: { src: "https://randomuser.me/api/portraits/men/55.jpg", alt: "herbert-gardner"},
        ideas: [{}]
    },
    {
        username: "brandcastillo",
        password: "brandiepasswd",
        email: "brandiecastillo@example.com",
        photo: { src: "https://randomuser.me/api/portraits/women/8.jpg", alt: "brandie-castillo"},
        ideas: [{}]
    },
    {
        username: "clay-burke",
        password: "notprotected",
        email: "cburke@fakemail.com",
        photo: { src: "https://randomuser.me/api/portraits/men/86.jpg", alt: "clayotn-burke"},
        ideas: [{}]
    },
    {
        username: "christinaj",
        password: "cjensenpassword",
        email: "tinajensen@example.com",
        photo: { src: "https://randomuser.me/api/portraits/women/4.jpg", alt: "christina-jensen"},
        ideas: [{}]
    }
];

const seedPosts=[
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    },
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    },
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    },
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    },
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    },
    {
        authorInfo: {
            isAnonymous: false,
            username: "joanna90403",
            canContact: false
        },
        ideaBody: {
                title: "",
                description: "",
                pictures: [{
                    src: String,
                    alt: String
                }],
                keywords: [],
                // should be an array of strings
                votes: { type: Number, default: 0 }
                // counter
        },
        comments: [
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                username: "",
                isAnonymous: false,
                commentBody: ""
            },
            {
                isAnonymous: true,
                commentBody: ""
            }]
    }
];

const seedArrays=[seedUsers, seedPosts, seedComments, seedMessages];
module.exports = seedArrays;