let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let popup = document.getElementById('popup')
let posts = document.getElementById('posts')

console.log(form)
console.log(input)
console.log(msg)
console.log(popup)
console.log(posts)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    formValidation()
    formValidationPopup()
});


let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = 'ToDo cant be blank'
        console.log('Failed')
    } else {
        msg.innerHTML = '';
        console.log('Success')
    }
}

let formValidationPopup = () => {
    if (input.value === '') {
        popup.innerHTML = 'Should Fill the Blank'
        alert('Failed')
    } else {
        popup.innerHTML = '';
        alert('success')
    }
    acceptData()
    createPost()
}

let data = []

let acceptData = () => {
    data['text'] = input.value
    console.log(data)
}

let createPost = () => {
    posts.innerHTML += `
    <div>
                    <p>${data.text}</p>
                    <span class="options">
                        <i onclick="editPost(this)" class="fas fa-edit"></i>
                        <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
                </div>
    `
    input.value = ''
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e)=>{
    innerHTML = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()
}