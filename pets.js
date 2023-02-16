const root = document.getElementById('container');

document.addEventListener('DOMContentLoaded', (e)=>{

    const photoDiv = document.getElementById('dog-photos')
    const getDogPhotos = async () =>{
        const photos = await fetch("https://dog.ceo/api/breeds/image/random/5")
        .then(res => res.json())
         .then(data =>{

            data.message.forEach((element, index) => {
                const newImage = document.createElement('img')
                newImage.id = `photo${index}`
                newImage.src = element

                photoDiv.appendChild(newImage)
                console.log(data.message)
            });
        }).catch(err => console.log('error in fetch: ', err))
    }
    getDogPhotos();
})