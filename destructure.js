 const person = {name : 'Anik', age: 17, job: 'programer' , address:'SiliconVellay', gfName: 'prapti', phone:'01625680601'};
  //const gfName= person.gfName;
  const {phone, gfName,job} = person;
  console.log(gfName,phone,job);
// console.log(phone);

const friends = ['sakib Khan','Araman Khan', 'Salman Khan' , 'Sharuk Khan', 'Amir Khan']

const [chotoFriend , nextFriend, ...restFriends] = friends;
console.log (chotoFriend, nextFriend);
console.log (restFriends);

const complexObject = {
    name : 'abc',
    info :{
        address: 'kola bagan',
        leader: 'samsu'
    }
}

const {leader} = complexObject.info;
console.log(leader);