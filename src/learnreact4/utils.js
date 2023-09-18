export function getImageUrl1(imageId,size='s'){
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export function getImageUrl(person, size) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  