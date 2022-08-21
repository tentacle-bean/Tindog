import dogs from "./data.js"

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getDogHtml(){
        const {name, age, bio, hasBeenSwiped, hasBeenLiked} = this
        const active1 = (hasBeenSwiped && !hasBeenLiked) ? "profile-badge-active" : ""
        const active2 = (hasBeenSwiped && hasBeenLiked) ? "profile-badge-active" : ""
        
        return `
                <div class="profile-text">
                    <h1 class="profile-data">${name}, ${age}</h1>
                    <p class="profile-message">${bio}</p>
                </div>
                <img class="profile-badge ${active1}" src="images/badge-nope.png">
                <img class="profile-badge ${active2}" src="images/badge-like.png">
        `
    }
    
    getDogBG(){
        return `url("${this.avatar}"), linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,1))`
    }
    
    dislike(){
        this.hasBeenSwiped = true;
        this.hasBeenLiked = false;
        
        const record = dogs.find((match) => {
            return match.name === this.name
        })
        
        record.hasBeenSwiped = true
        record.hasBeenLiked = false
    }
    
    like(){
        this.hasBeenSwiped = true;
        this.hasBeenLiked = true;
        
        const record = dogs.find((match) => {
            return match.name === this.name
        })
        
        record.hasBeenSwiped = true
        record.hasBeenLiked = true
    }
}

export default Dog
