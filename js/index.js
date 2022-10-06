import Controls from "./controls.js"
import  Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay,
} from "./elemts.js"
import Events from "./events.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sounds()

Events({controls, sound, timer})

