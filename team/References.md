# Reference Sheet

### Models & Schemas

```js
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: String,
        photo: { src: String, alt: String},
        ideas: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }],
        saved: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }]
    },
);  
// exported as "User"  
```

For both `ideas` and `comments`, include an option for users to post ideas and comment **anonymously** by adding an `anonymous` option (collapse the username input field on the front-end using `useState` and `onClick`):

```js
const commentSchema = new mongoose.Schema(
    {
        username: String,
        // username: {
        //     ref: "User",
        //     type: mongoose.Schema.Types.ObjectId
        // },
        isAnonymous: Boolean,
        commentBody: { type: String, required: true },
    },
    {timestamps: true}
);

const ideaSchema = new mongoose.Schema(
    {
        username: String,
        title: { type: String, required: true },
        description: { type: String, required: true },
        imgSrc: String,
        keywords: Array,
        // should be an array of strings
        votes: { type: Number, default: 0 },
        // counter
        comments: {type: [commentSchema], default: []}
    },
    {timestamps: true}
);
```

```js
const messageSchema = new mongoose.Schema(
    {
        sender: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        sendTo: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        messageBody: { type: String, required: true }
    },
    {timestamps: true}
);
// exported as "Message"
```

### Controller Routes
<!-- 
## (Tables below will be modified to match routes in illustration) -->

![Login](https://i.imgur.com/qg3OONT.png)
![Dashboard](https://i.imgur.com/atYgdDz.png)
![Inbox](https://i.imgur.com/hsCwoNw.png)

<!-- | Type | URL | Model & Description | 
| --- | :---: | :---: |
| POST - Create | **/login** | Create an account |
| GET - Find | **/login** | Find and validate user credentials  |
| GET - FindMany | **/dash/:userId** | Render most recents/popular *(front-end toggle)* |
| POST - Create | **/post** | Create a new post |
| PUT - FindByIdAndUpdate | **/edit/:id** | Edit post *(should include user validation)* |
| GET - FindById | **/comments/:id** | ***Find idea post*** and render all comments |
| DELETE - FindByIdAndDelete | **/** | Delete post *(should include user validation)* |
| PUT - FindByIdAndUpdate | **/:id** | **Up or down-vote** post |
| POST - Create | **/** | Add a new comment |
| DELETE - FindByIdAndDelete| **/** | ***Find comment*** and delete |
| PUT - FindByIdAndUpdate | **/account/:userId** | Change user credentials *(should include user validation)* |
| OTHER | **/** | *Table-template* |

##### Post-MVP:
| Type | URL | Model & Description | 
| --- | :---: | :---: |
| POST - Create | **/message** | Send a message to a user referencing an idea |
| GET - FindMany | **/thread/:senderId** | Gets all messages between two users |
| GET - Find | **/inbox** | Get all messages |
| DELETE - FindByIdAndDelete | **/** | Delete a message in a thread | -->

