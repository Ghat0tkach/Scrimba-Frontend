// Create the Dog class here
class dog{
    constructor(data){
        Object.assign(this,data)
    }
 
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default dog