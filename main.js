// GET Request
function getTodos() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        params: {
            _limit: 5
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

document.getElementById('get').addEventListener('click', getTodos);

// POST Request
function addTodo() {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'New Todo',
            completed: false
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

document.getElementById('post').addEventListener('click', addTodo);

// PUT Request
function updateTodo() {
    axios({
        method: 'put',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        data: {
            title: 'Updated Todo',
            completed: true
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

document.getElementById('put').addEventListener('click', updateTodo);

// PATCH Request
function patchTodo() {
    axios({
        method: 'patch',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        data: {
            title: 'Patched Todo',
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

document.getElementById('patch').addEventListener('click', patchTodo);


// DELETE Request
function deleteTodo() {
    axios({
        method: 'delete',
        url: 'http://jsonplaceholder.typicode.com/todos/1',
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}

document.getElementById('delete').addEventListener('click', deleteTodo);

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
        <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
        </div>
        <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
        </div>
    `;
}
