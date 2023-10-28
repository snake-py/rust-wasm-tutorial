import { Universe } from 'rust-wasm-tutorial';

const pre = document.getElementById('game-of-life-canvas');
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};

window.onload = () => {
    requestAnimationFrame(renderLoop);
};
