

const main = document.getElementById('main')
main.addEventListener('click', function event()
{
    alert('I was clicked!')
})

const input = document.querySelector('input')
input.addEventListener('keypress', function event(e)
{
    console.log(e.which)
})

const div = document.querySelectorAll('div')

function bubble(e)
{
    e.stopPropagation()
    console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

function capture(e)
{
    console.log(this.firstChild.nodeValue.trim() + ' captured')
}

for (let i = 0; i < div.length; i++)
{
    div[i].addEventListener('click', bubble)
}

for (let i = 0; i < div.length; i++)
{
    div[i].addEventListener('click', capture, true)
}