


const t = {
    1:{
        text:'text1'
    },
    2:{
        text:'text2'
    },
    3:{
        text:'text3'
    }
}

// for(let k in t) {
//     console.log(k, t[k])
// }

function printDate() {
    const temp = new Date();
    const pad = (i) => (i < 10) ? "0" + i : "" + i;
    return temp.getFullYear() +
        '-' + choose(['A', 'B', 'C', 'D', 'E', 'F']) + '-' +
      pad(1 + temp.getMonth()) +
      pad(temp.getDate()) +
      pad(temp.getHours()) +
    //   pad(temp.getMinutes()) +
    //   pad(temp.getSeconds()) +
      pad(temp.getMilliseconds()) +
      '-' +
      getRandomInt(99999)
    //   choose(['A', 'B', 'C']))
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

let a = printDate()

t[a] = {
    text:'text4'
}

for(let k in t) {
    console.log(printDate())
}
