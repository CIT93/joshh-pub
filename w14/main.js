const url = "https://jsonplaceholder.typicode.com/posts"
        

const getPosts = async () => {
    try {
        const request = await fetch(url)
        const data = await request.json();
        if (data.length) {
            onSuccess(data);
        } else {
            console.log(`error on return value`);
        }
    } catch {
        onError(error);
    }
}

const displayPosts = posts => {
    posts.forEach(post => {
        
    });
}

const onError = err => {
    console.log(`Error ${err}`);
}

const onSuccess = posts => {
    displayPosts(posts);
}

const start = () => {
    getPosts();
}

start()