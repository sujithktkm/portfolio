/**
 * Created by sujithkatakam on 3/15/16.
 */

function pagination() {
    var monkeyList = new List('test-list', {
        valueNames: ['name'],
        page: 4,
        innerWindow: 4,
        plugins: [ ListPagination({}) ]
    });
}
window.onload = pagination;