const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydivind';
user.premium = false;

const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
