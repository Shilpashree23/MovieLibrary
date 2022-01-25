var app = window.app || {};

app.Models = app.Models || {};

app.Models.Movie = Backbone.Model.extend({
    

    defaults: function () {

        return {
            name: 'Goo',
            rating: '4.3',
            genre:'love',
            comment:'Good'
        };
    },
    
    names:function(){
        return this.get('name')
    },

    rating:function(){
        return this.get('rating')
    },

    ishorrormovie:function(){
        if(this.get('genres')=='horror'){
            return true
        }
        else{
            return false
        }
    },
    islovemovie:function(){
        if(this.get('genres')=='love'){
            return true
        }
        else{
            return false
        }
    },
    isactionmovie:function(){
        if(this.get('genres')=='action'){
            return true
        }
        else{
            return false
        }
    },
    isinspirationmovie:function(){
        if(this.get('genres')=='inspiration'){
            return true
        }
        else{
            return false
        }
    }

});
