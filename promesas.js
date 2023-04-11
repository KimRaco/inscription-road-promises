const koder = {
    name: 'Rafa',
    interviewed: false, // true
    proposalSent: false,
    isEnrolled: false,
    introductoryCourse: false
}

function beinterviewed (koderToInterview) {

    return new Promise ( (resolve, reject) => {
        console.log(`Interviewing ${koderToInterview.name}`)

        setTimeout( () => {
            koderToInterview.interviewed = true;
            
            if (!koderToInterview.interviewed){
                reject(`${koderToInterview.name} couldn't make it to the interview`)
            }
            resolve(koderToInterview)
        }, 3000 )
    })
}

function sendAproposal (koderToOffer) {

    return new Promise ( (resolve, reject) => {
        console.log(`Working on a proposal to ${koderToOffer.name}`)

        setTimeout( () => {
            koderToOffer.proposalSent = true
            
            if (!koderToOffer.proposalSent){
                reject(`Couldn't make the offer to ${koderToOffer.name}`)
            }
            resolve(koderToOffer)
        }, 3000 )
    })
}


function getEnrolled (koderToGetEnrolled){

    return new Promise ( (resolve, reject) => {
        console.log(`Working on the enrolled of ${koderToGetEnrolled.name}`)

        setTimeout(()=>{
            koderToGetEnrolled.isEnrolled= true

            if (!koderToGetEnrolled.isEnrolled){
                 reject(`Couldn't get enrolled ${koderToGetEnrolled.name}`)
            }
            resolve(koderToGetEnrolled)
         }, 3000 )
    })     
}

function takeIntroductoryCourse (koderToTakeTheCourse){

    return new Promise ( (resolve, reject) => {
        console.log(`Working on getting ${koderToTakeTheCourse.name} into the introductory course`)

        setTimeout(()=>{
            koderToTakeTheCourse.introductoryCourse = true

            if (!koderToTakeTheCourse.introductoryCourse){
                reject(`Couldn't get ${koderToTakeTheCourse.name} into the introductory course`)
            }
            resolve(koderToTakeTheCourse)
        }, 3000 )
     }) 
}




/*
//Encadenamiento de Promesas

beinterviewed(koder)
    .then( (koderToInterview) => {
        console.log(`${koderToInterview.name} has been interviewed`)
        console.log(koderToInterview)
        return sendAproposal(koderToInterview)
    })
    .then( (koderToOffer) => {
        console.log(`${koderToOffer.name} has accept the offer`)
        console.log(koderToOffer)
        return getEnrolled(koderToOffer)
    })   
    .then( (koderToGetEnrolled) => {
        console.log(`${koderToGetEnrolled.name} has been enrolled`)
        console.log(koderToGetEnrolled)
        return takeIntroductoryCourse(koderToGetEnrolled)
    })
    .then( (koderToTakeTheCourse) => {
        console.log(`${koderToTakeTheCourse.name} is in the introductory course`)
        console.log(koderToTakeTheCourse)
    })
    .catch( (error) => {
        console.log('Error: ', error)
    })
*/





//Async/Await  

async function main() {

    const koderToInterview = await beinterviewed(koder)
    console.log(`${koderToInterview.name} has been interviewed`)
    console.log(koderToInterview)

    const koderToOffer = await sendAproposal(koderToInterview)
    console.log(`${koderToOffer.name} has accept the offer`)
    console.log(koderToOffer)

    const koderToGetEnrolled = await getEnrolled(koderToOffer)
    console.log(`${koderToGetEnrolled.name} has been enrolled`)
    console.log(koderToGetEnrolled)
    
    const koderToTakeTheCourse = await takeIntroductoryCourse(koderToGetEnrolled)
    console.log(`${koderToTakeTheCourse.name} is in the introductory course`)
    console.log(koderToTakeTheCourse)

}

main()
          