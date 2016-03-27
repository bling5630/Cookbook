import _ from 'ramda';
import $ from 'jquery';

var app = (tags)=> {
  let url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=?`;
  $.getJSON(url, (data)=> {
    let urls = data.items.map((item)=> item.media.m);
    let images = urls.map((url)=> $('<img />', { src: url }) );

    $(document.body).html(images);
  });
};
app("cats");
