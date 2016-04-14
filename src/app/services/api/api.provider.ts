import {provide} from 'angular2/core';
import {AuthApi} from '../auth-api/authentication';
import {Api} from './api';

let apiFactory = (userService: AuthApi) => {
    return new Api(userService.getUserId());
}

export let apiProvider = provide(Api, {
    useFactory: apiFactory,
    deps: [AuthApi] 
});