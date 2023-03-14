var users = [{
    name: 'Jacques',
    age: 24,
    password: '123',
    online: false
}, {
    name: 'Jean',
    age: 32,
    password: 'aaaaaa',
    online: true
}, {
    name: 'Marie',
    age: 26,
    password: "",
    online: true
}
];

for (var i = 0; i < users.length; i++) {
    if (users[i].password === "") {
        console.log(users[i].name + " n'a pas de mot de passe");
    }
    if (users[i].online) {
        console.log(users[i].name + " est en ligne");
    }
    if (users[i].password.length < 4) {
        console.log(users[i].name + " a un mot de passe trop court");
    }
}