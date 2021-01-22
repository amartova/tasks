var model = [
  {
    id: 0,
    title: "Title text 1",
    text: "Some text 1",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 1,
    title: "Title text 2",
    text: "Some text 2",
    user: {
      id: 1,
      name: "user 2",
    },
  },
  {
    id: 2,
    title: "Title text 3",
    text: "Some text 3",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 3,
    title: "Title text 4",
    text: "Some text 4",
    user: {
      id: 2,
      name: "user 3",
    },
  },
  {
    id: 4,
    title: "Title text 5",
    text: "Some text 5",
    user: {
      id: 0,
      name: "user 1",
    },
  },
];

function task6() {
  var groupUser = {};
  var result = [];

  for (var key in model) {
    var entity = model[key];

    if (!groupUser.hasOwnProperty(entity.user.id)) {
      groupUser[entity.user.id] = { posts: [] };
    }

    groupUser[entity.user.id].posts.push(entity);
  }

  for (var key in groupUser) {
    var userName = groupUser[key].posts[0].user.name;
    var posts = groupUser[key].posts;
    posts.forEach((post) => {
      delete post["user"];
    });

    result.push({
      id: key,
      name: userName,
      posts: posts,
    });
  }
  
  return result;
}
