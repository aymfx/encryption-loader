import compiler from './compiler.js';
import loader from '../src';
describe('project start', () => {
    test('loader', () => {
        expect(loader).toBeInstanceOf(Function);
    })

    test(`'use strict';var _x49891=['\\x6c\\x6f\\x67'];a=12;console[_x49891[0]](a);`, async () => {
        const stats = await compiler('./instance/index.js');
        const output = stats.toJson().modules[0].source;
        console.log(output)
        expect(output).toBe(`'use strict';var _x49891=['\\x6c\\x6f\\x67'];a=12;console[_x49891[0]](a);`);
    });
})


