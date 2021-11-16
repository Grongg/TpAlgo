//EXO 01
const mult = (nb1, nb2) => {
    let res = 0

    res = nb1 * nb2
    console.log(res)
}

//EXO 02
const multByFour = (array) => {
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] * 4
    }
    console.log(array);
}

//EXO 03
const checkAge = (persona) => {
    if (persona.age > 28)
        console.log("Je suis dans la fleur de l'âge")
    else
        console.log("Je suis entrain de me bonifier");
}

//EXO 04
const sumAge = (arr) => {
    let res = 0

    for (let i = 0; i < arr.length; i++){
        res += arr[i].age
    }
    console.log(res)
}

//EXO 05
const users = [
  {
    firstname : 'laurent'
  },
  {
    firstname : 'david'
  },
  {
    firstname : 'caroline'
  }
]

const addUser = (username) => {
    for (let i =0; i < users.length; i++) {
        if (users[i].firstname === username) {
            console.log("Prénom déjà présent, merci d'en choisir un autre");
            return
        }
    }
    const newUser = {
        firstname: username
    }
    users.push(newUser)
    console.log(users);
}

//EXO 06
const swapAndCountLetters = (str) => {
    let count = 0
    let tmp = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count += 1
            tmp += 'z'
        }
        else
            tmp += str[i]
    }
    str = tmp
    console.log("Il y a " + count + " de lettres 'a' dans la phrase", '\n' + str);
    return str
}

//EXO 07
const randMultOrDiv = (arr) => {
    let res = arr[0]

    for (let i = 1; i < arr.length; i++) {
        const random = Math.round(Math.random())
        random ? res = res * arr[i] : res = res / arr[i]
    }
    console.log(res)
    return res
}

//EXO 08
const UsernameCleaner = (str) => {
    let username = ""
    
    username += str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        username += str[i].toLowerCase()
    }
    console.log(username);
    return username
}

//EXO 09
const calc = (nb1, nb2, sign) => {
    let res = 0

    if (isNaN(nb1) || isNaN(nb2))
    {
        console.log("Calcul impossible");
        return null
    }
    if (sign === '+')
        res = (nb1) + (nb2)
    else if (sign === '-')
        res = (nb1) - (nb2)
    else if (sign === '*')
        res = (nb1) * (nb2)  
    else if (sign === '/')
        res = (nb1) / (nb2)
    else
    {
        console.log("Calcul impossible");
        return null
    }
    console.log(res);
    return res
}

//EXO 10
const generateStep = (min, max, step) => {
    let arr = []

    arr.push(min)
    for (let i = 0; min < max; i++) {
        if ((arr[i] + step) > max)
            break
       arr.push(arr[i] + step)
    }
    console.log(arr)
    return arr
}

//EXO 11
const fibo = (x) => {
    let arr = [0, 1]

    for (let i = 0; i < x; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr)
}

// let arr = [1, 8, 588, 64, 25]
// const person = 
// {
//     firstName: 'Lionel',
//     age: 23
// }
// const users = [
//   {
//     firstname: 'john',
//     age: 34
//   },
//   {
//     firstname: 'clara',
//     age: 26
//   },
//   {
//     firstname: 'sarah',
//     age: 29
//   }
// ]
// const nbs = [1, 4, 32, 8]

// mult(5, 3)
// multByFour(arr)
// checkAge(person)
// sumAge(users)
// addUser("lionel")
// swapAndCountLetters("Sayonara! Oui, j'ai des origines japonaises.")
// randMultOrDiv(nbs)
// UsernameCleaner("lIONeL")
// calc(5, 10, '*')
// calc(8, 4, '+')
// calc(77, 33, '-')
// calc(81, 0, '/') //Infini
// calc(81, 0, '*') //0
// calc(0, 81, '/') //0
// calc(0, 81, '*') //0
// calc(8, 'k', '-') 
// calc(13, '45', 'plus')
// calc(13, 45, 'plus') //Calcul impossible
// generateStep(2, 10, 2)
// generateStep(1, 13, 3)
// generateStep(1, 12, 3)
// fibo(5)
// fibo(8)
// fibo(50)