let count = 0;
let count_one = 0;

function getObj(getObject,a) {

    let countPosition = 1;
    a+=1

    for (let [key, value] of Object.entries(getObject)) {
        if (typeof value === 'object') {
//create  ul and add class

            let ul = document.createElement('ul');
            ul.classList.add('any')
            document.body.appendChild(ul)
//adding in ul key value
            let val = document.createTextNode(key)
            document.getElementsByClassName('any')[count].appendChild(val)
//take style to any ul
            document.getElementsByClassName('any')[count].style.paddingLeft = `${a}00px`
            document.getElementsByClassName('any')[count].style.color = 'blue'

            count += 1
            console.log(a)
            

            getObj(value,a)


            //create ul tag
        }
        else {
            let str_ul = document.createElement('ul');
            str_ul.classList.add('anyForStr');
            let str_key = document.createTextNode(key)
            str_ul.appendChild(str_key)
            document.body.appendChild(str_ul).style.color = 'blue'

            //create li tag
            let tag = document.createElement('li')
            let val = document.createTextNode(value)
            tag.appendChild(val)
            document.getElementsByClassName("anyForStr")[count_one].appendChild(tag)
            document.getElementsByClassName("anyForStr")[count_one].style.paddingLeft = `${a}00px`
            document.getElementsByTagName("li")[count_one].style.color = 'black'
            document.getElementsByTagName("li")[count_one].style.marginLeft = '50px'

            

            count_one += 1

        }
    }
}
const obj = {
    firstChild: "first",
    secondChild: {
        second: "second",
        second_one: "second_one"
    },
    thirdChild: {
        thirdChild_one: {
            tcoo: "tcoo",
            tcot: "tcot"
        },
        thirdChild_two: {
            tcto: "tcto",
            tctt: "tctt",
            tcttt:"tcttt"
        }
    }

}

getObj(obj,0);