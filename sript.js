let naturPhotos = [
    {
        photoSRC: 'images/soup.jpg',
        shortText : 'Donate'
    }
]

let showPhotos = (photo, index) => {

    $('.content').append('<div class="pictureHolder"><img class="picture" src="" alt=""> <div class="textHolder"><p class="text"></p></div></div>');
    $('.content .pictureHolder:last img').attr('src', photo.photoSRC);
    $('.content .pictureHolder:last .text').text(photo.shortText);
    $('.content .pictureHolder:last img').attr('data-number', index);
}

naturPhotos.forEach(showPhotos);