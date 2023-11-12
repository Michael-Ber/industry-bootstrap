import { setMarkPos } from "./setMarkPositionOnMap"
import { openCloseModal } from "./modal";
import { burgerInteraction } from "./burger";

window.addEventListener('DOMContentLoaded', () => {
    setMarkPos();
    openCloseModal();
    burgerInteraction();
})