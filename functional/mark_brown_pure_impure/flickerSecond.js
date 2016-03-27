import _ from 'ramda';
import $ from 'jquery';

let flickr = (tags)=> {
  let url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=?`;
  return fetch(url)
  .then((resp)=> resp.json())
  .then((data)=> {
    let urls = data.items.map((item)=> item.media.m );
    let images = urls.map((url)=> $('<img />', { src: url }) );

    return images;
  });
};
flickr("cats").then((images)=> {
  $(document.body).html(images);
});

let responseToImages = (resp)=> {
  let urls = resp.items.map((item)=> item.media.m );
  let images = urls.map((url)=> $('<img />', { src: url }));

  return images;
};

let urls = (data)=> {
  return data.items.map((item)=> item.media.m);
};
let images = (urls)=> {
  return urls.map((url)=> $('<img />', { src: url }));
};
let responseToImages = _.compose(images, urls);

let responseToImages = (data)=> {
  return images(urls(data));
};
