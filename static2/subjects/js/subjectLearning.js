const log = console.log;


const exitPage = () => {
    const exit = document.querySelector('.exitPage');
    exit.addEventListener('click', () => {
        location.href = '/';
    }) 
}

const changeVideo = (link) => {
    const object = document.querySelector('object');
    object.data = link;
}


const getVideoLink = () => {
    const subjectlists = document.querySelectorAll('li');
    subjectlists.forEach( (subject) => {
        subject.addEventListener('click', (e)=> {
            const link = `${e.target.id}`;
            changeVideo(link);
        })
    } )
}

const subjectLearningInit = () => {
    getVideoLink()
}

subjectLearningInit();