Hooks.once("dragRuler.ready", (SpeedProvider) => {
    
        class DND5eSpeedProvider extends SpeedProvider {
    
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

dragRuler.registerModule("drag-ruler5e", DND5eSpeedProvider)
})