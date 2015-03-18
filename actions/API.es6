import Reflux from 'reflux';

const asyncResult = true;
const API = Reflux.createAction({
    get:    {asyncResult}
    post:   {asyncResult}
    update: {asyncResult}
    delete: {asyncResult}
    patch:  {asyncResult}
    list:   {asyncResult}
});

export default API;