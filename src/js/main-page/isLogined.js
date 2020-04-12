
class UserType {

        type = 'aaa';
        show = (el) => { return document.querySelector(el).style.display='';}
        hide = (el) => { return document.querySelector(el).style.display='none'; }
        changeType = () => {
            this.type='teacher';
            this.show('#toAddSubject');
            this.hide('#toBeTeacher')
        }
        addInfo = () => {
            document.getElementById("teacher-form").innerHTML='<object type="text/html" data="/src/html/main/teacher-form.html"></object>';
        }
    }

const toCreateSub = new UserType;
    toCreateSub.hide('#toAddSubject');

const changeType = () => { 
        toCreateSub.changeType();
        toCreateSub.addInfo();
        toCreateSub.hide('#main-isLogined-entire')
    }


export default {UserType}

