const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGalery = document.querySelector('.gallery')

const newElementinList = images.map(element => {

  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");

  imgElement.width = 250;
  imgElement.height = 150;
  imgElement.src = element.url;
  imgElement.alt = element.alt;

  liElement.append(imgElement);
  
  return liElement;
})


listGalery.append(...newElementinList);
