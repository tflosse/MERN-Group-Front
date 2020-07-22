let usersApi;
let ideasApi;

const usersApis = {
  production: "https://pure-reaches-36148.herokuapp.com/users",
  development: "http://localhost:4000/users",
};

const ideasApis = {
  production: "https://pure-reaches-36148.herokuapp.com/ideas",
  development: "http://localhost:4000/ideas",
};

if (window.location.hostname === "localhost") {
  usersApi = usersApis.development;
  ideasApi = ideasApis.development;
} else {
  usersApi = usersApis.production;
  ideasApi = ideasApis.production;
}
//can't do default exports when you need to export more than one
//changed to named exports

export { usersApi, ideasApi };
