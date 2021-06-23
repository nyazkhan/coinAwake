import { Inject, Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { CustomHTTPService } from './custom-http.service';
import { AppUrls } from './app.constant';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    User: any;

    constructor(@Inject(CustomHTTPService) private api: CustomHTTPService, public storage: StorageService) { }

    login(phoneNo) {
        return this.api.post('user/save', { mobile: phoneNo, type: 1, name: 'nyaz khan' }).pipe(map(response => {
            if (response.data) {

                this._loggedIn(response);
                return response;
            } else {
                return null;
            }
        }));
    }

    logout() {
        this.storage.storeData('accessToken', null);
        // this.storage.storeData('ngStorage-privileges', null);
        this.User = null;
        this.storage.clearData();
        // location.reload();
    }

    /**
     * Process a login/signup response to store user data
     */
    _loggedIn(resp) {
        this.storage.storeData('accessToken', resp.data.accessToken);
        this.User = resp.user;
    }

    isLoggedIn() {
        return localStorage.getItem('accessToken') ? true : false;
    }


    getCryptoNews(obj) {


        let reqObj = {
            "sourceName": obj.sourceName || [],
            "sentimate": obj.sentimate || [],
            "topicName": obj.topicName || [],
            "coinId": obj.coinId || [],
            "pageNo": obj.pageNo || 1,
            "totalRecord":  obj.totalRecord || 10,
            "typeName": obj.typeName || []

        }
        return this.api.post(AppUrls.postCryptoNews, reqObj)


        // return this.api.get(AppUrls.getCryptoNews)

    }

    getCoinMaster() {
        return this.api.get(AppUrls.coinMaster)
    }

    addToBookmark(item) {
        let arr = this.storage.getData('bookmark') || [];
        arr.push(item)
        this.storage.storeData('bookmark', arr);

    }
    removeFromBookmark(item) {
        let arr = this.storage.getData('bookmark');
        const index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        }
        this.storage.storeData('bookmark', arr);

    }

    getBookmarks() {
        return this.storage.getData('bookmark');
    }
}

