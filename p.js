
var path=document.URL.split("=")

fetch("https://www.googleapis.com/books/v1/volumes?download=DOWNLOAD_UNDEFINED&filter=FILTER_UNDEFINED&langRestrict=it&libraryRestrict=LIBRARY_RESTRICT_UNDEFINED&maxAllowedMaturityRating=MAX_ALLOWED_MATURITY_RATING_UNDEFINED&orderBy=relevance&printType=BOOKS&projection=FULL&q="+path[1])
    .then(response => response.json())
    .then(data => {vue.json=data;console.log(data.items)});

Vue.component('libri', {
   template: '#libri-template',
    data: function () {
    return {

      riassunto:false,
      //json:vue.json
    }
  },
  //template: "<div>{{libro}</div>"
});

 var vue=new Vue({
  el:'#app',

  data: {
    value:path[0],
    title:path[1],
    select:'pornhub',
    search:path[1].replace(/%20/g," "),
    json:null,
    //libro:'ciao',

   // newURL:path[1]?path[0]+"="+search:path[0]+"?search="+search,
  
   //numeroLibri:json.items.length
  },

 
 
})
 x=event.key
 if (x=="Enter") {
 location.href=path[0]+"="+vue.search
}
