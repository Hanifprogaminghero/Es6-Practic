const person = {name:'Jack Willim', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'kochu khet', phone: '01770995553', friends:['Tom hancks','tom cruise', 'tom yarn']}; 


const{ phone} = person;

const ComplexObject = {
    name: 'abc',
    info:{
        address: 'kola bagan',
        leader: 'Tiger leader',
    }
}

const {leader} = ComplexObject.info;


 //const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ('Shakib khan', 'Arman khan', 'Amir khan', 'Salman khan', 'Sharukh khan');
const [chotofriend, nextfriend] = friends;

console.log(chotofriend, nextfriend);
