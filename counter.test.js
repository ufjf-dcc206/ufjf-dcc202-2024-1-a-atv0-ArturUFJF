import {test, expect} from 'vitest';

test('teste de div', ()=>{

    const div = document.createElement('div');
    div.textContent = "Olá mundo!";
    expect(div).toHaveTextContent("Hello, world!");
});