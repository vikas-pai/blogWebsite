var uname, password;
var title, content;
var Id;
fetch("http://localhost:5000/api/v1/user/signUp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ uname, password }),
});
fetch(`http://localhost:5000/api/v1/blog/create/?userId=` + Id, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title, content }),
});
fetch("http://localhost:5000/api/v1/user/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ uname, password }),
});
fetch(`http://localhost:5000/api/v1/blog/displayAll/?userId=` + Id, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
