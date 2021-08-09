class TokenRulermovementDistance {
    
    static async addTokenRulerMovementButtons(app, html, data) {
        
        let actor = canvas.tokens.get(data._id).actor;
        if (actor === undefined) return;      

        //Testing setting the correct  button to active when opening HUD

        /*  if (token.actor.getFlag("drag-ruler5e", "movementType") === 0 && token.actor.getFlag("drag-ruler5e", "movementType") === null) {
            actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.walk)
            actor.setFlag("drag-ruler5e", "movementType", "walk")
            walkButton.addClass("active")
            flyButton.removeClass("active")
        } 
    
        if (token.actor.getFlag("drag-ruler5e", "movementType") === "walk") {
            actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.walk)
            actor.setFlag("drag-ruler5e", "movementType", "walk")
            walkButton.addClass("active")
            flyButton.removeClass("active")
        }
        if (token.actor.getFlag("drag-ruler5e", "movementType") == "fly") {
            actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.fly);
            actor.setFlag("drag-ruler5e", "movementType", "fly")
            flyButton. addClass("active")
            walkButton.removeClass("active")
        }
        */       
        
        //movement types
        const walk = actor.data.data.attributes.movement.walk;
        const fly = actor.data.data.attributes.movement.fly;
        const swim = actor.data.data.attributes.movement.swim;
        const burrow =  actor.data.data.attributes.movement.burrow;
        const units = actor.data.data.attributes.movement.units;

        let walkButton = ''
        let flyButton = ''
        let swimButton = ''
        let burrowButton = ''    

        let defaultButtons = '';
        {    
            
            if (walk != 0 && walk != null){
                walkButton = $(`<div class="control-icon token-info-icon-walk" title="Walk Speed: ${walk}"><i class="fas fa-shoe-prints"></i> ${walk}</div>`);
                walkButton.click((event) => {
                    walkButton.addClass("active")
                    if (burrowButton != 0 && burrowButton != null) {burrowButton.removeClass("active")}
                    if (flyButton != 0 && flyButton != null) {flyButton.removeClass("active")}
                    if (swimButton != 0 && swimButton != null) {swimButton.removeClass("active")}
                    actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.walk)
                    actor.setFlag("drag-ruler5e", "movementType", "walk") 
                })  
            } 
            
            if (fly != 0 && fly != null){ 
                flyButton = $(`<div class="control-icon token-info-icon-fly" title="Fly Speed: ${fly}"><i class="fas fa-crow"></i> ${fly}</div>`);
                flyButton.click((event) => {
                    flyButton.addClass("active")
                    if (burrowButton != 0 && burrowButton != null) {burrowButton.removeClass("active")}
                    if (swimButton != 0 && swimButton != null) {swimButton.removeClass("active")}
                    if (walkButton != 0 && walkButton != null) {walkButton.removeClass("active")}
                    actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.fly);
                    actor.setFlag("drag-ruler5e", "movementType", "fly")
                })
            }
            
            if (swim != 0 && swim != null){
                swimButton = $(`<div class="control-icon token-info-icon" title="Swim Speed: ${swim}"><i class="fas fa-swimmer"></i> ${swim}</div>`);
                swimButton.click((event) => {
                    swimButton.addClass("active")
                    if (burrowButton != 0 && burrowButton != null) {burrowButton.removeClass("active")}
                    if (flyButton != 0 && flyButton != null) {flyButton.removeClass("active")}
                    if (walkButton != 0 && walkButton != null) {walkButton.removeClass("active")}
                    actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.swim);
                    actor.setFlag("drag-ruler5e", "movementType", "swim")
                })
            }
            
            if (burrow != 0 && burrow != null){
                burrowButton = $(`<div class="control-icon token-info-icon" title="Burrow Speed: ${burrow}"><i class="fas fa-mountain"></i> ${burrow}</div>`);
                burrowButton.click((event) => {
                    burrowButton.addClass("active")                    
                    if (flyButton != 0 && flyButton != null) {flyButton.removeClass("active")}
                    if (swimButton != 0 && swimButton != null) {swimButton.removeClass("active")}
                    if (walkButton != 0 && walkButton != null) {walkButton.removeClass("active")}
                    actor.setFlag("drag-ruler5e", "movementDistance", actor.data.data.attributes.movement.burrow);
                    actor.setFlag("drag-ruler5e", "movementType", "burrow")
                })
            }

            defaultButtons = `${walkButton}${flyButton}${swimButton}${burrowButton}`;
            

        }  
        
        //display button on far left
        let newdiv = '<div class="token-info-container">';
        
        let buttons = $(`<div class="col token-info-column-left">${defaultButtons}</div>`);
        

        //let newdiv = '<div class="token-info-container" data-action="movementDistance-selector" >';    
        
        //Test array for function below
        //let movementTypes = ["walk", "fly"]
        
        //Test function to add movement button
        /* function addButton(buttonType, icon) {
            if (buttonType != 0 && buttonType != null){
                `${buttonType}Button` = $(`<div class="control-icon token-info-icon-walk" title="Walk Speed: ${buttonType}"><i class="fas ${icon}"></i> ${buttonType}</div>`);
                `${buttonType}Button`.click((event) => {
                    `${buttonType}Button`.addClass("active")
                    movementTypes.forEach(element => {
                        if(element != buttonType){
                            `${element}Button`.removeClass("active")
                        }
                    });
                    flyButton.removeClass("active")
                    actor.setFlag("drag-ruler5e", "movementDistance", 'actor.data.data.attributes.movement.${buttonType}')
                    actor.setFlag("drag-ruler5e", "movementType", "walk") 
                })  
            }
        }    */    
        
        html.find('.col.left').wrap(newdiv);
        //html.find('.col.left').before(buttons)
        html.find('.col.left').before(walkButton)
        html.find('.col.left').before(flyButton)
        html.find('.col.left').before(swimButton)
        html.find('.col.left').before(burrowButton)
            
        
        //html.find('.col.left').before(buttons)
           
    }
}

Hooks.on('renderTokenHUD', (app, html, data) => {
    TokenRulermovementDistance.addTokenRulerMovementButtons(app, html, data)
    }
);

console.log("Movement types loaded to Token HUB");

