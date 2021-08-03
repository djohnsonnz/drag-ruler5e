Hooks.once("dragRuler.ready", (SpeedProvider) => {
    // When dragruler is ready to go give it all the PF2 specific stuff
        class DND5eSpeedProvider extends SpeedProvider {
    //Registers colours for up to four movement actions so colours can be customized for them, and sets defaults
    get colors() {
        return [
            {id: "move", default: 0x3222C7},
            {id: "dash", default: 0xFFEC07},
            {id: "cunning", default: 0xC033E0},            
        ]
    }

    getRanges(token) {
        if (token.actor.data.attributes.movement.fly > 0) {
            const baseSpeed = token.actor.data.movement.fly
        } else {
            const baseSpeed = token.actor.data.movement.walk
        }

        // A character can always walk it's base speed and dash twice it's base speed
        const ranges = [
            {range: baseSpeed, color: "walk"},
            {range: baseSpeed * 2, color: "dash"}
        ]
                
        return ranges
    }
}

dragRuler.registerModule("my-module-id", DND5eSpeedProvider)
})