let myMap;

const init = () => {
  myMap = new ymaps.Map( "map", {
    center: [55.76, 37.64],
    zoom: 15.25,
    controls:[]
  });

//   var myPlacemark = new ymaps.GeoObject({
//     geometry: {
//         type: "Point",
//         coordinates: [55.75157, 37.610125]
//     }
// });
const coord = [55.75157, 37.610125];
const myCollection = new ymaps.GeoObjectCollection({},{
  draggable: false,
  iconLayout: 'default#image',
  iconImageHref:"./pictures/map-point.svg",
  iconImageSize: [46, 57],
  iconImageOffset: [-35, -52]
})
  myCollection.add(new ymaps.Placemark(coord));
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);









//////////
